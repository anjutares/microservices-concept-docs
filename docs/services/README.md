---
sidebar_position: 1
---

# Microservicios

CryoNova Labs utiliza una arquitectura de microservicios para soportar la plataforma de comercialización y gestión de Q-Control Nova. Cada microservicio es responsable de una funcionalidad específica relacionada con nuestro producto único.

## Principios de diseño

Nuestros microservicios siguen estos principios clave:

- **Autonomía**: Cada servicio puede desarrollarse, desplegarse y escalarse de forma independiente
- **Especialización**: Cada servicio se enfoca en resolver un aspecto específico del ciclo de vida de Q-Control Nova
- **Resiliencia**: Los fallos en un servicio no afectan al funcionamiento de otros
- **Comunicación asíncrona**: Uso de mensajería para operaciones que no requieren respuesta inmediata
- **API First**: Diseño cuidadoso de contratos de API antes de la implementación

## Microservicios principales

| Servicio | Responsabilidad | Tecnología |
|----------|-----------------|------------|
| UserSvc | Gestión de usuarios, autenticación y perfiles de clientes interesados en Q-Control Nova | .NET 10, PostgreSQL 17 |
| ProductSvc | Gestión de especificaciones, configuraciones y versiones de Q-Control Nova | .NET 10, PostgreSQL 17 |
| OrderSvc | Procesamiento de pedidos personalizados de Q-Control Nova | .NET 10, PostgreSQL 17 |
| NotificationSvc | Gestión de comunicaciones con clientes durante el ciclo de compra y soporte | .NET 10, PostgreSQL 17 |
| PaymentSvc | Procesamiento de pagos y facturación para la adquisición del producto | .NET 10, PostgreSQL 17 |

## Flujos de negocio principales

El proceso de compra de Q-Control Nova está orquestado por los microservicios:

1. **UserSvc** gestiona la autenticación y perfiles de clientes (instituciones académicas, laboratorios, empresas)
2. **ProductSvc** proporciona información detallada del producto y opciones de configuración (canales, temperatura de operación)
3. **OrderSvc** maneja el flujo de pedido personalizado, incluyendo cotizaciones, aprobaciones y seguimiento
4. **PaymentSvc** procesa las transacciones según el modelo de facturación acordado con el cliente
5. **NotificationSvc** mantiene al cliente informado durante todo el proceso de compra y entrega

Para obtener más información sobre cada microservicio, consulte las secciones específicas de la documentación. 