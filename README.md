# 💼 Portafolio Personal - Misael Gómez Cuautle

Portafolio web profesional desarrollado con React + Vite, Tailwind CSS y las mejores prácticas de desarrollo web.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646cff.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.4-38bdf8.svg)

## 🚀 Características

- ⚡ **Vite** - Build tool ultrarrápido
- ⚛️ **React 18** - Librería de UI moderna
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Adaptado a todos los dispositivos
- 🎭 **Framer Motion** - Animaciones fluidas
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, Structured Data
- 🛡️ **Error Boundary** - Manejo robusto de errores
- ♿ **Accesible** - Cumple con estándares WCAG
- 🌐 **React Router** - Navegación SPA
- 🎪 **TypeAnimation** - Efectos de texto dinámicos
- ✨ **Particles Effect** - Fondo interactivo

## 📦 Estructura del Proyecto

```
my-cv/
├── public/
│   ├── sitemap.xml          # Mapa del sitio
│   ├── robots.txt           # Configuración SEO
│   └── og-image.jpg         # Imagen para redes sociales
├── src/
│   ├── Components/
│   │   ├── ErrorBoundary/   # Manejo de errores
│   │   ├── SEO/             # Componente SEO
│   │   ├── Navbar/          # Barra de navegación
│   │   ├── Footer/          # Pie de página
│   │   ├── Skills/          # Tecnologías
│   │   ├── PortfolioCard/   # Cards de proyectos
│   │   └── ...
│   ├── Pages/
│   │   ├── Home/            # Página principal
│   │   ├── AboutMe/         # Sobre mí
│   │   ├── Portfolio/       # Portafolio
│   │   ├── WhatDo/          # Tecnologías
│   │   └── NotFound/        # 404
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── docs/
│   ├── SEO.md               # Documentación SEO
│   └── ERROR_BOUNDARY.md    # Documentación ErrorBoundary
└── package.json

```

## 🛠️ Instalación

### Requisitos previos:
- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos:

```bash
# Clonar el repositorio
git clone https://github.com/Misael-GC/my-cv.git

# Entrar al directorio
cd my-cv

# Instalar dependencias
pnpm install
# o
npm install

# Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Producción
pnpm build        # Build para producción
pnpm preview      # Preview del build

# Calidad de código
pnpm lint         # Ejecuta ESLint

# Testing
pnpm test         # Ejecuta tests (cuando estén configurados)
```

## 🎯 Características Implementadas

### ✅ SEO Optimizado
- Meta tags dinámicos por página
- Open Graph para redes sociales
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap.xml y robots.txt
- Ver documentación: [`docs/SEO.md`](docs/SEO.md)

### 🛡️ Error Boundary
- Captura errores de renderizado
- UI alternativa amigable
- Logs detallados en desarrollo
- Opciones de recuperación
- Ver documentación: [`docs/ERROR_BOUNDARY.md`](docs/ERROR_BOUNDARY.md)

### 📱 Responsive Design
- Mobile First
- Breakpoints optimizados
- Touch targets adecuados (min 48x48px)

### ♿ Accesibilidad
- Navegación por teclado
- ARIA labels
- Contraste WCAG AA
- Skip to main content

## 🔧 Configuración

### Personalizar información personal:

1. **Actualizar SEO** (`src/Components/SEO/SEO.jsx`):
```jsx
const SEO = ({ 
  title = 'TU NOMBRE - Full Stack Developer',
  url = 'https://TU_DOMINIO.com',
  // ...
```

2. **Actualizar sitemap** (`public/sitemap.xml`):
```xml
<loc>https://TU_DOMINIO.com/</loc>
```

3. **Crear imagen OG** (`public/og-image.jpg`):
- Dimensiones: 1200x630 px
- Ver guía: `public/OG-IMAGE-README.md`

4. **Actualizar redes sociales** (`src/Components/Navbar/index.jsx`):
```jsx
<a href="https://www.linkedin.com/in/TU_PERFIL/">
<a href="https://github.com/TU_USUARIO">
```

## 🎨 Personalizar Colores

Edita `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#9550e5',    // Color principal
      secondary: '#7c3aed',  // Color secundario
      darkbg: '#131424',     // Fondo oscuro
    }
  }
}
```

## 📚 Documentación Adicional

- [Documentación SEO completa](docs/SEO.md)
- [Documentación ErrorBoundary](docs/ERROR_BOUNDARY.md)
- [Guía de imagen Open Graph](public/OG-IMAGE-README.md)

## 🚀 Deploy

### Vercel (Recomendado):

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify:

```bash
# Build
pnpm build

# Subir carpeta dist/
```

### GitHub Pages:

```bash
# Instalar gh-pages
npm install -D gh-pages

# Agregar en package.json:
"homepage": "https://TU_USUARIO.github.io/my-cv",
"scripts": {
  "predeploy": "pnpm build",
  "deploy": "gh-pages -d dist"
}

# Deploy
pnpm deploy
```

## 🔗 Links

- **Portfolio**: [https://misael-gomez.dev](https://misael-gomez-cuautle.netlify.app/)
- **LinkedIn**: [linkedin.com/in/misael-gómez-cuautle](https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/)
- **GitHub**: [github.com/Misael-GC](https://github.com/Misael-GC)
- **Twitter**: [@MisaelG51069440](https://x.com/MisaelG51069440)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

Hecho con ❤️ por [Misael Gómez Cuautle](https://github.com/Misael-GC)
