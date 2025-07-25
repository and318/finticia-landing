# Finticia Landing

**Finticia** es una landing page de una compañía ficticia. El proposito es solo demostrativo como prueba técnica.

---

## ✨ Características

- ⚡ Framework: React
- 🎨 Estilos con Sass (No framework)
- 🎞️ Animaciones usando Framer Motion
- 📱 Diseño Responsive para Desktop y Mobile

----

## ✨ Especificaciones de las Secciones

### Sección Hero:
- Animación de entrada para texto y elementos gráficos.
- Interacciones de scroll con efecto parallax para el texto y la imagen del teléfono.
- Diseño de dos columnas (texto a la izquierda, imagen a la derecha) con apilamiento responsivo.
- Botón de "Call to Action" (CTA) con animaciones de hover, que enlaza a la sección de productos.

### Sección Beneficios:
- Layout mansory implementado con CSS Grid.
- 8 ítems de beneficios con imágenes de fondo y texto superpuesto.
- Efecto de volteo al hacer hover para revelar la descripción.
- Animación al hacer scroll para que los ítems aparezcan al entrar en la vista.

### Sección Productos:
- Carrusel para la vista móvil (mostrando 1 ítem a la vez con flechas de navegación al costado).
- Diseño de "abanico" para la vista de escritorio.
- Botón de "Call to Action" en la descripción de cada producto.
- Animación de flotación sutil e intercalada para las imágenes de los productos.
- Animación al hacer scroll para que los ítems aparezcan al entrar en la vista.
- Descripción del producto en un overlay estilo modal al hacer clic.


### Sección Footer:
- Logo y derechos de autor.
- Enlaces rápidos.
- Enlaces a descargas de Play Store y App Store (no funcionales).
- Información de contacto.

### Header:
- Fijo en la parte superior.
- Menú de navegación responsivo con icono de hamburguesa (SVG) y animación de apertura/cierre suave.
- Logo de Finticia.

### General:
- Variables Sass para la paleta de colores. Se utilizó las variables del archivo figma enviado.
- Tipografías 'Open Sans' y 'Graphie' integradas.
- Comportamiento de scroll suave al hacer clic en los enlaces del menú.
- Botón "subir" con animación de Framer Motion.
- `box-sizing: border-box` aplicado globalmente.

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Sass](https://sass-lang.com/)

---

## 🧪 Requisitos

- Node.js (versión recomendada 18+)
- npm (o yarn)

---

## 🛠 Instalación y ejecución

Para correr el proyecto en tu entorno local, sigue estos pasos:

```bash
git clone https://github.com/and318/finticia-landing # Reemplaza con la URL de tu repositorio
cd finticia-landing
npm install
npm start
```

Abre tu navegador en `http://localhost:3000` y explora la aplicación.

---

## 📁 Estructura principal

- `/public` # Recursos estáticos (index.html, favicon, etc.)
- `/src` # Código fuente de la aplicación
  - `/assets` # Archivos estáticos (imágenes, fuentes)
    - `/fonts`
    - `/img`
    - `/masonry`
  - `/components` # Componentes de React (Header, Hero, Benefits, Productos, Details, Footer)
    - `/Benefits`
    - `/Details`
    - `/Footer`
    - `/Header`
    - `/Hero`
    - `/Productos`
  - `/styles` # Estilos globales y variables de Sass
    - `_variables.scss`
  - `App.js`
  - `App.scss`
  - `index.js`
  - `index.scss`

  ---

## 💡 Conclusión
Quise crear la landing con los elementos más nativos de react, sin frameworks ni librería de diseño. La idea es mostrar la capacidad de desarrollo y diseño.Gracias por su tiempo 🤓.