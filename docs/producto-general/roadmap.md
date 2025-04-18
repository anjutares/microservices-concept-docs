---
sidebar_position: 3
---

# Roadmap

A continuación se presenta el plan de desarrollo de Q-Control Nova para los próximos 6 meses, detallando los hitos más importantes y sus fechas previstas de entrega.

## Tabla de hitos

| Mes | Hito | Descripción |
|-----|------|-------------|
| Mes 1 | **Diseño hardware** | Finalización de esquemáticos de ASICs y backplane fotónico |
| Mes 2 | **Prototipo FPGA** | Implementación de control inicial en FPGA antes de ASIC |
| Mes 3 | **Backend MVP** | Primera versión funcional de microservicios básicos |
| Mes 4 | **Integración criogénica** | Primera prueba de integración en entorno criogénico |
| Mes 5 | **Frontend Beta** | Interfaz de usuario para control y monitorización |
| Mes 6 | **Alpha completo** | Prototipo completo con 64 canales validado con 20 qubits |

## Fases del proyecto

### Fase Alpha (Q1 2026)
Prototipo con 64 canales y validación en entorno de laboratorio con hasta 20 qubits. Esta fase se centra en demostrar la viabilidad técnica y las ventajas en reducción de cableado y latencia.

:::tip Objetivos clave
- Validar el diseño de ASICs Cryo-CMOS
- Confirmar latencia QEC menos de 1 µs
- Demostrar reducción de cableado > 90%
:::

### Fase Beta (Q4 2026)
Implementación de cluster con 4 módulos permitiendo el control de hasta 200 qubits. Incorporación de feedback de los primeros usuarios y mejoras en la arquitectura de software.

### General Availability (Q2 2027)
Producto certificado (CE & FCC) y listo para producción a escala. Documentación completa, soporte y programa de entrenamiento para usuarios.

## Desarrollo de software

El desarrollo de la plataforma de software seguirá estas etapas:

| Mes | Componentes software | Estado |
|-----|----------------------|--------|
| Mes 1 | Arquitectura base y contratos API | ✓ |
| Mes 2 | Microservicios core (UserSvc, ProductSvc) | En progreso |
| Mes 3 | Gateway API y seguridad | Planificado |
| Mes 4 | Sistema de mensajería con RabbitMQ | Planificado |
| Mes 5 | Frontend Angular inicial | Planificado |
| Mes 6 | Observabilidad y monitorización | Planificado |

:::warning Dependencias críticas
La disponibilidad de entornos criogénicos para pruebas es un factor crítico que podría afectar las fechas de entrega. Estamos trabajando con socios para asegurar acceso a estos recursos.
:::

## Próxima generación (2028+)

A más largo plazo, la visión es desarrollar una segunda generación del Q-Control Nova que permita:
- Control de 1024+ qubits por módulo
- Interfaz CXL óptica para latencia aún menor
- Integración con sistemas de computación cuántica heterogéneos 