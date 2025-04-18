---
sidebar_position: 2
---

# Stack Tecnológico

La arquitectura de software de CryoNova Labs está diseñada para proporcionar una plataforma robusta y escalable para el control de sistemas cuánticos. A continuación se muestra la estructura general de nuestro stack tecnológico:

```mermaid
graph LR
  subgraph Frontend
    A["Angular 19 SPA<br/>(PWA + i18n)"]
  end
  subgraph Gateway
    B["YARP API Gateway<br/>.NET 10"]
  end
  subgraph BackEnd
    C1(UserSvc)
    C2(ProductSvc)
    C3(OrderSvc)
    C4(NotificationSvc)
  end
  subgraph Messaging
    D["RabbitMQ 3.13<br/>MassTransit 10"]
  end
  subgraph DB
    E1["PostgreSQL 17<br/>UserSvc"]
    E2["PostgreSQL 17<br/>ProductSvc"]
    E3["PostgreSQL 17<br/>OrderSvc"]
  end

  A -- HTTPS --> B
  B -- gRPC/HTTP --> C1 & C2 & C3 & C4
  C1 & C2 & C3 & C4 -- AMQP --> D
  C1 --> E1
  C2 --> E2
  C3 --> E3
```

## Componentes principales

### Frontend
- **Angular 19**: Framework moderno para desarrollo de SPA
- **Tailwind 4**: Utilidades CSS para diseño consistente y rápido
- **PWA**: Soporte para Progressive Web App con experiencia offline
- **i18n**: Internacionalización multiidioma (ES/EN)

### API Gateway
- **YARP .NET 10**: Gestión centralizada de rutas y seguridad
- **JWT Security**: Autenticación con OpenIddict
- **Rate Limiting**: Protección contra abuso de la API

### Microservicios
- **Platform**: .NET 10 (C#)
- **Comunicación**: Combinación de REST y gRPC
- **Despliegue**: Servicios systemd en Linux

### Base de datos
- **PostgreSQL 17**: Base de datos por microservicio
- **Dapper**: Micro ORM de alto rendimiento para acceso a datos
- **Migraciones**: Gestión automatizada de esquemas con FluentMigrator

### Messaging
- **RabbitMQ 3.13**: Broker de mensajería para comunicación asíncrona
- **MassTransit 10**: Capa de abstracción para mensajería
- **Patrones**: Outbox, retries, y sagas para fiabilidad

## Ventajas del stack

:::tip Beneficios clave
- **Desacoplamiento**: Los microservicios pueden evolucionar independientemente
- **Escalabilidad**: Cada componente puede escalar según sus necesidades
- **Resiliencia**: Fallos aislados no afectan a todo el sistema
- **Observabilidad**: Monitorización completa a nivel de sistema
:::

Esta arquitectura nos permite desarrollar y desplegar rápidamente nuevas características mientras mantenemos un sistema estable y seguro para nuestros usuarios. 