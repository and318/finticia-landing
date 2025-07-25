
# Finticia Landing

**Finticia** es una landing page de una compañía ficticia. El propósito es solo demostrativo como prueba técnica.

---

## ✨ Características

- ⚡ Framework: React  
- 🎨 Estilos con Sass (No framework)  
- 🎞️ Animaciones usando Framer Motion  
- 📱 Diseño Responsive para Desktop y Mobile

---

## ✨ Especificaciones de las Secciones

### Header:
- Fijo en la parte superior.
- Menú de navegación responsivo con icono de hamburguesa (SVG) y animación de apertura/cierre suave.
- Logo de Finticia.

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

### Sección Nosotros:
- Presenta información clave sobre la compañía a través de 4 tarjetas.
- Cada tarjeta incluye un icono SVG animado (flotante), un título y una descripción.
- Las tarjetas tienen una animación de entrada asíncrona al aparecer en la vista.
- Incluye un Call to Action (CTA) animado debajo de las tarjetas para invitar a la acción.

### Sección Footer:
- Logo y derechos de autor.
- Enlaces rápidos.
- Enlaces a descargas de Play Store y App Store (no funcionales).
- Información de contacto.

### General:
- Variables Sass para la paleta de colores. Se utilizó las variables del archivo Figma enviado.
- Tipografías 'Open Sans' y 'Graphie' integradas.
- Comportamiento de scroll suave al hacer clic en los enlaces del menú.
- Botón "subir" con animación de Framer Motion.
- `box-sizing: border-box` aplicado globalmente.

---

## 🎯 Justificaciones de diseño

- **Enfoque en el usuario**: El mensaje central apunta al control financiero personal, acompañado de una visualización clara del producto (app en uso).
- **Estética tecnológica y moderna**: Paleta de colores en negro, blanco y verde neón para transmitir sofisticación, innovación y seguridad.
- **Jerarquía visual clara**: Tipografías contrastadas, secciones definidas y llamados a la acción bien visibles, facilitando la navegación.
- **Producto tangible**: Mostrar tarjetas físicas refuerza credibilidad y conexión con el usuario.
- **Beneficios como experiencia de marca**: Seccio con imágenes atractivas que refuerzan recompensas concretas.
- **Confianza y seguridad**: Íconos e información simplificada que refuerzan pilares de marca como transparencia y soporte 24/7.
- **CTA bien definidos**: Botones destacados y accesibles para invitar a la acción de forma constante.

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

Quise crear la landing con los elementos más nativos de React, sin frameworks ni librerías de diseño. La idea es mostrar la capacidad de desarrollo y diseño. Gracias por su tiempo 🤓.
