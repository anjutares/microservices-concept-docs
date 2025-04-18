---
sidebar_position: 6
---

# Guía de Estilos Frontend

Esta guía de estilos describe los principios de diseño, componentes y lenguaje visual para el frontend de Q-Control Nova.

## Paleta de Colores

### Colores Primarios
| Color | Código Hex | Uso |
|-------|------------|-----|
| Azul Primario | `#0056B3` | Acciones primarias, enlaces, encabezados |
| Turquesa Secundario | `#00A3A3` | Acciones secundarias, destacados |
| Naranja Acento | `#FF5722` | Acentos, notificaciones, alertas |

### Escala de Grises
| Color | Código Hex | Uso |
|-------|------------|-----|
| Negro | `#121212` | Texto, iconos |
| Gris Oscuro | `#333333` | Encabezados, texto importante |
| Gris Medio | `#757575` | Texto secundario |
| Gris Claro | `#E0E0E0` | Bordes, divisores |
| Blanco Hueso | `#F8F8F8` | Fondos, tarjetas |
| Blanco | `#FFFFFF` | Fondos de página |

### Colores de Estado
| Color | Código Hex | Uso |
|-------|------------|-----|
| Verde Éxito | `#4CAF50` | Estados de éxito, confirmaciones |
| Amarillo Advertencia | `#FFC107` | Mensajes de advertencia |
| Rojo Error | `#F44336` | Estados de error, acciones destructivas |
| Azul Información | `#2196F3` | Mensajes informativos |

## Tipografía

### Familias de Fuentes
- **Fuente Principal**: Roboto
- **Fuente Secundaria**: Open Sans
- **Fuente Monoespaciada**: Source Code Pro (para bloques de código)

### Escala Tipográfica
| Elemento | Tamaño | Peso | Altura de Línea |
|----------|--------|------|-----------------|
| H1 | 32px | 700 | 1.2 |
| H2 | 24px | 700 | 1.3 |
| H3 | 20px | 600 | 1.4 |
| H4 | 18px | 600 | 1.4 |
| Cuerpo | 16px | 400 | 1.5 |
| Pequeño | 14px | 400 | 1.5 |
| Leyenda | 12px | 400 | 1.4 |

## Componentes UI

### Botones

#### Botón Primario
- Fondo: Azul Primario
- Texto: Blanco
- Borde: Ninguno
- Radio de borde: 4px
- Padding: 10px 20px
- Hover: Oscurecer un 10%
- Deshabilitado: 50% de opacidad

#### Botón Secundario
- Fondo: Transparente
- Texto: Azul Primario
- Borde: 1px sólido Azul Primario
- Radio de borde: 4px
- Padding: 10px 20px
- Hover: Fondo azul claro (10% de opacidad)
- Deshabilitado: 50% de opacidad

#### Botón Terciario
- Fondo: Transparente
- Texto: Azul Primario
- Borde: Ninguno
- Padding: 10px 20px
- Hover: Fondo azul claro (10% de opacidad)
- Deshabilitado: 50% de opacidad

### Campos de Entrada

#### Entrada de Texto
- Borde: 1px sólido Gris Claro
- Radio de borde: 4px
- Padding: 10px 12px
- Foco: El color del borde cambia a Azul Primario
- Error: El color del borde cambia a Rojo Error
- Placeholder: Gris Medio

#### Desplegable
- Mismo estilo que la Entrada de Texto
- Icono: Chevron hacia abajo
- Menú de opciones: Fondo blanco con radio de borde de 2px
- Opción seleccionada: Fondo azul claro (10% de opacidad)

### Tarjetas
- Fondo: Blanco
- Borde: Ninguno
- Radio de borde: 8px
- Sombra: 0 2px 8px rgba(0,0,0,0.1)
- Padding: 20px

## Iconografía

### Sistema de Iconos
Utilizamos Material Design Icons como nuestra biblioteca principal de iconos.

### Tamaños de Iconos
- Grande: 32px
- Medio: 24px (predeterminado)
- Pequeño: 16px

### Colores de Iconos
Los iconos deben heredar el color del texto de su contexto a menos que se estilicen específicamente de otra manera.

## Espaciado

Utilizamos un sistema de espaciado de 8px:
- Extra pequeño: 4px
- Pequeño: 8px
- Medio: 16px
- Grande: 24px
- Extra grande: 32px
- 2X Extra grande: 48px
- 3X Extra grande: 64px

## Sombras

| Nivel | Uso | CSS |
|-------|-----|-----|
| Nivel 1 | Tarjetas, botones | `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` |
| Nivel 2 | Desplegables, popovers | `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` |
| Nivel 3 | Modales, diálogos | `box-shadow: 0 8px 16px rgba(0,0,0,0.1)` |

## Animaciones

### Transiciones
- Transición predeterminada: 150ms ease-in-out
- Transiciones de página: 300ms ease-in-out

### Estados de Hover
Todos los elementos interactivos deben tener un estado de hover que proporcione retroalimentación visual.

## Accesibilidad

- Todo el texto debe mantener una relación de contraste mínima de 4.5:1 contra su fondo (cumplimiento WCAG AA)
- Los elementos interactivos deben tener un estado de foco visible
- Los iconos que transmiten significado deben incluir texto alternativo apropiado o aria-labels
- Los elementos del formulario deben tener etiquetas asociadas

## Diseño Responsivo

Seguimos un enfoque mobile-first con estos puntos de quiebre:
- Móvil: < 768px
- Tablet: 768px - 1023px
- Escritorio: ≥ 1024px

## Ejemplo de Implementación

```html
<button class="btn btn-primary">
  <span class="btn-icon">
    <i class="material-icons">add</i>
  </span>
  <span class="btn-text">Añadir Nuevo Elemento</span>
</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  transition: all 150ms ease-in-out;
}

.btn-primary {
  background-color: #0056B3;
  color: #FFFFFF;
  border: none;
}

.btn-primary:hover {
  background-color: #004494;
}

.btn-icon {
  margin-right: 8px;
}
```

Este documento es una guía viva que evolucionará con el desarrollo del producto. Consulta con el equipo de diseño antes de introducir nuevos patrones visuales. 