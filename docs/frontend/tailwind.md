---
sidebar_position: 3
---

# Tailwind CSS

Utilizamos Tailwind CSS 4 como framework de utilidades para nuestro diseño, lo que nos permite crear interfaces consistentes y mantener una base de código CSS mínima y eficiente.

## Configuración

Nuestra configuración está extendida para incluir los colores de marca de CryoNova Labs y otras personalizaciones:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nova-violet': {
          DEFAULT: '#5C1FFF',
          '50': '#F0EBFF',
          '100': '#E1D6FF',
          '200': '#C5B6FF',
          '300': '#A48DFF',
          '400': '#8252FF',
          '500': '#5C1FFF',
          '600': '#4B00FF',
          '700': '#3A00C7',
          '800': '#2A008F',
          '900': '#1B0057',
        },
        'graphite': {
          DEFAULT: '#0C0C0D',
          '50': '#F8F8F8',
          '100': '#E6E6E7',
          '200': '#C6C6C8',
          '300': '#9D9DA0',
          '400': '#5C5C61',
          '500': '#36363A',
          '600': '#242427',
          '700': '#18181A',
          '800': '#0C0C0D',
          '900': '#000000',
        },
      },
      fontFamily: {
        'inter': ['Inter Display', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '128': '32rem',
      },
      boxShadow: {
        'crisp': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'crisp-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

## Directrices de diseño

### Espaciado

Utilizamos un sistema de espaciado consistente basado en múltiplos de 4px:

```html
<!-- Espaciado consistente entre elementos -->
<div class="space-y-4">
  <h1 class="text-2xl font-semibold">Panel de control</h1>
  <p class="text-gray-700">Estado general del sistema</p>
  
  <!-- Padding consistente -->
  <div class="p-4 sm:p-6 lg:p-8">
    <!-- Contenido -->
  </div>
</div>
```

### Tipografía

La tipografía sigue una escala definida:

```html
<h1 class="text-3xl font-bold">Título principal</h1>
<h2 class="text-2xl font-semibold">Subtítulo</h2>
<h3 class="text-xl font-medium">Sección</h3>
<p class="text-base">Texto normal</p>
<p class="text-sm">Texto pequeño</p>
```

:::tip Uso de font-inter
Aplicamos la fuente Inter Display usando la clase `font-inter` en el elemento raíz:
```html
<body class="font-inter">
```
:::

### Colores

Utilizamos nuestra paleta de colores personalizada:

```html
<!-- Colores primarios -->
<button class="bg-nova-violet-500 text-white hover:bg-nova-violet-600">
  Acción primaria
</button>

<!-- Colores secundarios -->
<button class="bg-white text-graphite-800 border border-graphite-200 hover:bg-graphite-50">
  Acción secundaria
</button>

<!-- Variaciones de tono para diferentes estados -->
<div class="text-nova-violet-900">Título importante</div>
<div class="text-nova-violet-700">Enlace</div>
<div class="text-graphite-500">Texto de interfaz</div>
<div class="text-graphite-400">Texto menos importante</div>
```

### Responsive Design

Aplicamos un enfoque "mobile-first" con modificadores para pantallas más grandes:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Cards responsivas -->
  <div class="p-4 bg-white rounded-lg shadow">
    <!-- Contenido -->
  </div>
  <!-- Repetir para cada card -->
</div>
```

## Componentes personalizados

### Componentes de tarjeta

```html
<div class="bg-white dark:bg-graphite-800 rounded-lg shadow-crisp p-4 transition-all hover:shadow-crisp-lg">
  <div class="flex items-center justify-between">
    <h3 class="font-medium text-graphite-800 dark:text-white">Título del componente</h3>
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nova-violet-100 text-nova-violet-500">
      <!-- Icono -->
    </span>
  </div>
  <div class="mt-4">
    <!-- Contenido -->
  </div>
</div>
```

### Botones

```html
<!-- Botón primario -->
<button class="px-4 py-2 bg-nova-violet-500 text-white font-medium rounded-md hover:bg-nova-violet-600 focus:outline-none focus:ring-2 focus:ring-nova-violet-500 focus:ring-offset-2 transition-colors">
  Botón primario
</button>

<!-- Botón secundario -->
<button class="px-4 py-2 bg-white text-graphite-700 font-medium rounded-md border border-graphite-300 hover:bg-graphite-50 focus:outline-none focus:ring-2 focus:ring-nova-violet-500 focus:ring-offset-2 transition-colors">
  Botón secundario
</button>
```

## Utilidades personalizadas

Hemos creado algunas utilidades personalizadas que se utilizan frecuentemente en nuestra aplicación:

```css
/* En styles/custom-utilities.css */
@layer utilities {
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  
  .gradient-violet {
    background: linear-gradient(135deg, theme('colors.nova-violet.500'), theme('colors.nova-violet.700'));
  }
  
  .scrollbar-thin {
    scrollbar-width: thin;
  }
}
```

Estas utilidades se pueden usar directamente en HTML:

```html
<div class="gradient-violet text-white text-shadow-sm p-6 rounded-lg">
  Contenido con gradiente
</div>
``` 