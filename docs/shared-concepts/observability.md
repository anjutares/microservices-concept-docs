---
sidebar_position: 1
---

# Observabilidad

La observabilidad es un aspecto clave de nuestra arquitectura de microservicios. Proporciona visibilidad sobre el rendimiento de nuestros sistemas distribuidos, ayuda a identificar y depurar problemas, y asegura que cumplamos con nuestros objetivos de nivel de servicio (SLOs).

## Componentes Clave de Observabilidad

Nuestro stack de observabilidad consta de tres pilares principales:

### 1. Métricas

Utilizamos métricas para realizar seguimiento del rendimiento y salud del sistema a lo largo del tiempo. Nuestro sistema de métricas incluye:

- **Prometheus**: Para recolección y almacenamiento de métricas
- **Grafana**: Para visualización y dashboards
- **Métricas personalizadas**: Incluyendo KPIs técnicos y de negocio

Las métricas clave que monitorizamos incluyen:
- Tasa de peticiones, latencia y tasas de error (método RED)
- Utilización de recursos (CPU, memoria, red)
- Métricas de negocio (pedidos, usuarios, transacciones)
- Profundidad de colas y tiempos de procesamiento

### 2. Logs

El registro estructurado proporciona información detallada sobre el comportamiento del sistema:

- **Logging centralizado**: Usando Elasticsearch, Fluentd y Kibana (stack EFK)
- **Formato de log estructurado**: JSON con propiedades enriquecidas de contexto
- **Correlación de logs**: Usando IDs de trazas distribuidas
- **Niveles de log**: DEBUG, INFO, WARN, ERROR, FATAL con filtrado apropiado

### 3. Trazas Distribuidas

Las trazas ayudan a visualizar y entender los flujos de peticiones a través de los servicios:

- **OpenTelemetry**: Para instrumentación y recolección de datos
- **Jaeger**: Para visualización y análisis
- **IDs de correlación**: Transmitidos a través de todos los límites de servicios
- **Contexto de span**: Incluyendo nombre de servicio, operación, marcas de tiempo y etiquetas

## Monitorización y Alertas

Nuestro enfoque de monitorización incluye:

- **Alertas proactivas**: Basadas en detección de anomalías y umbrales
- **Dashboards de SLO**: Seguimiento del rendimiento frente a objetivos
- **Rotación de guardia**: Con rutas claras de escalado
- **Comprobaciones de salud automatizadas**: Para cada endpoint de servicio

## Implementación en Servicios

Cada servicio implementa la observabilidad a través de:

```csharp
// Example instrumentation in C#
public class ObservabilityMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ObservabilityMiddleware> _logger;
    private readonly Metrics _metrics;

    public async Task InvokeAsync(HttpContext context)
    {
        // Start timing
        var watch = Stopwatch.StartNew();
        
        // Create correlation ID or extract from headers
        var correlationId = GetOrCreateCorrelationId(context);
        
        try
        {
            using var activity = StartActivity(context, correlationId);
            
            // Add correlation ID to all logs in this context
            using var logScope = _logger.BeginScope(new Dictionary<string, object>
            {
                ["CorrelationId"] = correlationId,
                ["RequestPath"] = context.Request.Path
            });
            
            await _next(context);
            
            // Record success metrics
            _metrics.RecordSuccess(context.Request.Path, watch.ElapsedMilliseconds);
        }
        catch (Exception ex)
        {
            // Record failure metrics
            _metrics.RecordFailure(context.Request.Path);
            
            _logger.LogError(ex, "Request failed");
            throw;
        }
    }
}
```

## Mejores Prácticas

- **Nomenclatura consistente**: Usar nombres estandarizados para métricas y campos de log
- **Enriquecimiento contextual**: Incluir contexto de negocio relevante en logs y trazas
- **Muestreo**: Aplicar muestreo inteligente para servicios de alto volumen
- **Gestión de costes**: Equilibrar las necesidades de observabilidad con el consumo de recursos
- **Privacidad**: Asegurar que la información personal identificable (PII) se maneja adecuadamente en los datos de logging 