---
sidebar_position: 4
---

# Progressive Web App (PWA)

La aplicación frontend de CryoNova Labs está configurada como Progressive Web App (PWA), lo que proporciona una experiencia similar a una aplicación nativa, con capacidades offline, instalación en dispositivos y notificaciones push.

## Características PWA

### Experiencia offline

Nuestra aplicación implementa estrategias avanzadas de caché para funcionar incluso sin conexión a Internet:

- **Recursos estáticos**: Todos los archivos JS, CSS, fuentes e imágenes se almacenan en caché.
- **Datos críticos**: Los datos esenciales para el funcionamiento básico se sincronizan y almacenan en IndexedDB.
- **Estado fallback**: Interfaces específicas para mostrar cuando no hay conexión.

```typescript
// ngsw-config.json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(svg|jpg|png|webp)"
        ]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api-performance",
      "urls": [
        "/api/reference-data/**"
      ],
      "cacheConfig": {
        "strategy": "performance",
        "maxSize": 100,
        "maxAge": "1d"
      }
    },
    {
      "name": "api-freshness",
      "urls": [
        "/api/measurements/**"
      ],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 100,
        "maxAge": "10m",
        "timeout": "5s"
      }
    }
  ]
}
```

### Instalación

La aplicación puede instalarse como una aplicación nativa en dispositivos Windows, macOS, Linux, Android e iOS. El archivo `manifest.webmanifest` define cómo se comporta una vez instalada:

```json
{
  "name": "CryoNova Control Panel",
  "short_name": "CryoNova",
  "theme_color": "#5C1FFF",
  "background_color": "#ffffff",
  "display": "standalone",
  "scope": "./",
  "start_url": "./",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Notificaciones push

Utilizamos Web Push API para enviar notificaciones en tiempo real sobre eventos críticos del sistema, incluso cuando la aplicación no está abierta:

```typescript
// push-notification.service.ts
@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  constructor(
    private swPush: SwPush,
    private http: HttpClient
  ) {}

  requestSubscription() {
    if (!this.swPush.isEnabled) {
      console.warn('Las notificaciones push no están disponibles');
      return throwError(() => 
        new Error('Las notificaciones push no están disponibles')
      );
    }

    return this.swPush.requestSubscription({
      serverPublicKey: environment.VAPID_PUBLIC_KEY
    }).then(sub => {
      return this.http.post('/api/notifications/subscriptions', sub).toPromise();
    });
  }

  setupNotificationHandlers() {
    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      // Navegar según la acción y datos de la notificación
      console.log('Notificación clickeada', action, notification);
      
      // Ejemplo de navegación
      if (action === 'openAlert') {
        window.open(`/alerts/${notification.data.alertId}`, '_blank');
      }
    });
  }
}
```

## Sincronización en segundo plano

Implementamos Background Sync API para garantizar que las acciones críticas como cambios de configuración se completen incluso si hay problemas de red:

```typescript
// background-sync.service.ts
@Injectable({
  providedIn: 'root'
})
export class BackgroundSyncService {
  
  private db: IDBDatabase;
  
  constructor() {
    this.initDatabase();
  }
  
  async initDatabase() {
    // Inicializar IndexedDB para almacenar operaciones pendientes
  }
  
  async scheduleConfigUpdate(configUpdate: any) {
    // Guardar en IndexedDB
    await this.saveToQueue('config-updates', configUpdate);
    
    // Registrar sincronización
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      const registration = await navigator.serviceWorker.ready;
      try {
        await registration.sync.register('sync-config-updates');
      } catch (error) {
        console.error('Error al registrar la sincronización', error);
        // Intentar inmediatamente si la API no está disponible
        this.processQueue('config-updates');
      }
    } else {
      // Fallback para navegadores sin soporte
      this.processQueue('config-updates');
    }
  }
  
  private async saveToQueue(queueName: string, data: any) {
    // Guardar en IndexedDB
  }
  
  async processQueue(queueName: string) {
    // Procesar cola de operaciones pendientes
  }
}
```

:::warning Consideraciones de seguridad
Todas las operaciones offline que manipulan datos sensibles requieren autenticación previa y se validan nuevamente en el servidor cuando se sincronizan.
:::

## Actualización de la aplicación

Implementamos un mecanismo para detectar nuevas versiones y actualizar la aplicación automáticamente:

```typescript
// app.component.ts
export class AppComponent implements OnInit {
  constructor(
    private updates: SwUpdate,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.checkForUpdates();
  }

  checkForUpdates() {
    this.updates.available.subscribe(event => {
      console.log('Actualización disponible: ', event);
      
      const snack = this.snackBar.open(
        'Hay una nueva versión disponible',
        'Actualizar',
        { duration: 0 }
      );

      snack.onAction().subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
}
```

## Rendimiento PWA

La implementación como PWA también ayuda a mejorar significativamente el rendimiento de la aplicación:

- **Carga inicial más rápida**: Los recursos principales se precargan
- **Interacciones más fluidas**: Los recursos se almacenan localmente
- **Reducción del uso de red**: Los recursos se sirven desde caché

Utilizamos Lighthouse para medir regularmente las métricas PWA y asegurar que cumplimos con las mejores prácticas. 