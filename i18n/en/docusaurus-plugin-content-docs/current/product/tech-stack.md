---
sidebar_position: 2
---

# Technology Stack

## Software Architecture

CryoNova Labs has opted for a microservices architecture for the Q-Control Nova system, enabling the scalability and flexibility required for a complex quantum control system.

### Frontend

- **Framework**: Angular 19
- **CSS Framework**: Tailwind 4
- **Key Features**:
  - Single Page Application (SPA)
  - Progressive Web App (PWA) support
  - Internationalization (i18n)
  - End-to-end testing with Cypress
  - State management with NgRx

### API Gateway

- **Technology**: YARP .NET 10
- **Features**:
  - JWT Authentication
  - Rate limiting
  - Request aggregation
  - Logging middleware
  - Circuit breaker

### Microservices

- **Technology**: .NET 10
- **Communication**:
  - REST for synchronous operations
  - gRPC for high-performance services
  - Follows Domain Driven Design principles
  - CQRS for complex operations
  - Vertical slicing by functionality

### Database

- **Technology**: PostgreSQL 17
- **Implementation**:
  - Each microservice has its own database
  - Dapper for data access
  - Distributed transactions with Outbox pattern
  - JSON column types for flexible schemas
  - Full-text search capabilities

### Messaging

- **Technology**: RabbitMQ 3.13
- **Features**:
  - MassTransit 10 for messaging abstraction
  - Message validation
  - Retry policies
  - Dead letter queues
  - Publish/Subscribe patterns

## Advantages of Our Stack

- **Decoupling**: Each service can evolve independently
- **Scalability**: Services can be scaled individually based on demand
- **Resilience**: Fault isolation prevents cascading failures
- **Observability**: Centralized logging and monitoring
- **Technology flexibility**: Each service can use the most appropriate tools

## Hardware Integration

Our software interfaces with custom Cryo-CMOS ASICs through a specialized hardware abstraction layer that provides:

- **Real-time control**: Sub-microsecond response times
- **Calibration routines**: Automated system calibration
- **Error detection**: Hardware-level fault monitoring
- **Firmware updates**: Remote update capabilities

This architecture provides the robust foundation needed for controlling next-generation quantum systems. 