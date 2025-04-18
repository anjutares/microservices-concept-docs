# CryoNova Labs Documentation

Documentación oficial para el sistema Q-Control Nova de CryoNova Labs. Este sitio está construido con [Docusaurus v3](https://docusaurus.io/).

## Requisitos

- [Node.js](https://nodejs.org/en/download/) versión 18.0 o superior
- [PNPM](https://pnpm.io/installation) versión 8.0 o superior

## Instalación

```bash
# Instalar dependencias
pnpm install
```

## Comandos disponibles

- `pnpm start` - Inicia el servidor de desarrollo local en `http://localhost:3000`
- `pnpm build` - Genera una versión estática para producción
- `pnpm serve` - Sirve la versión de producción generada
- `pnpm clear` - Limpia caché y archivos generados
- `pnpm docs` - Alias para el comando start

## Estructura de archivos

```
├── docs/                    # Documentación en formato Markdown
│   ├── producto-general/    # Información general del producto
│   ├── frontend/            # Documentación del frontend 
│   ├── gateway-yarp/        # Documentación del gateway YARP
│   ├── services/            # Documentación de microservicios
│   ├── messaging/           # Documentación de sistema de mensajería
│   ├── infrastructure/      # Documentación de infraestructura
│   └── shared-concepts/     # Conceptos compartidos
├── src/                     # Código fuente del sitio
│   ├── css/                 # Estilos CSS personalizados
│   └── pages/               # Páginas adicionales (landing page, etc.)
├── static/                  # Archivos estáticos
│   ├── img/                 # Imágenes
│   └── openapi/             # Especificación OpenAPI
├── docusaurus.config.ts     # Configuración principal de Docusaurus
├── sidebars.js              # Configuración de las barras laterales
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

## OpenAPI

La documentación de la API se genera automáticamente a partir del archivo de especificación OpenAPI ubicado en `static/openapi/openapi.json`. Para actualizar la documentación de la API, simplemente modifique este archivo.

## Localización

Este sitio está disponible en español (idioma predeterminado) e inglés. Para contribuir a las traducciones, modifique los archivos en el directorio `i18n/`.

## Actualizaciones y despliegue

El sitio se actualiza automáticamente mediante un pipeline de CI/CD cada vez que se hace un push a la rama `main` del repositorio.

## Contribuciones

1. Cree una rama desde `main`
2. Realice sus cambios
3. Envíe un pull request a `main`

## Licencia

Todos los derechos reservados © CryoNova Labs 2026. 