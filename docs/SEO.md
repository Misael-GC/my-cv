# 🎯 SEO Component - Documentación

## ¿Qué es?
El componente SEO es un wrapper de `react-helmet-async` que permite agregar meta tags dinámicos a cada página de tu aplicación para mejorar el posicionamiento en buscadores (Google, Bing, etc.) y la apariencia en redes sociales.

## 🎯 Características

### ✅ Incluye:
- Meta tags básicos (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Structured Data (JSON-LD)
- Canonical URLs
- Tags personalizables por página

### 🌟 Beneficios:
- Mejor posicionamiento en Google
- Preview atractivo al compartir en redes sociales
- Información estructurada para buscadores
- Mayor CTR (Click Through Rate)

## 📦 Estructura

```
src/Components/SEO/
├── SEO.jsx           # Componente principal
└── index.js          # Export
```

## 🚀 Uso

### Uso básico en una página:

```jsx
import SEO from '../../Components/SEO';

function MiPagina() {
  return (
    <>
      <SEO 
        title="Mi Página"
        description="Descripción de mi página"
        url="https://midominio.com/mi-pagina"
      />
      
      {/* Contenido de la página */}
      <div>
        <h1>Mi Página</h1>
      </div>
    </>
  );
}
```

### Props disponibles:

```jsx
<SEO 
  title="Título de la página"                    // Requerido
  description="Descripción breve (160 chars)"    // Requerido
  image="/ruta/imagen.jpg"                       // Opcional
  url="https://midominio.com/ruta"               // Requerido
  type="website"                                 // website | article | profile
  author="Tu Nombre"                             // Opcional
  keywords="palabra1, palabra2, palabra3"        // Opcional
/>
```

## 📝 Ejemplos por tipo de página

### Homepage:

```jsx
<SEO 
  title="Misael Gómez Cuautle - Full Stack Developer"
  description="Desarrollador Full Stack especializado en React, Laravel, PHP, Docker. Portfolio de proyectos y experiencia profesional."
  keywords="desarrollador web, full stack, react, laravel, php, docker"
  url="https://misael-gomez.dev"
  type="website"
  image="/og-home.jpg"
/>
```

### Página de proyecto:

```jsx
<SEO 
  title="Ecommerce con Laravel y React"
  description="Tienda online completa desarrollada con Laravel 10, React 18, MySQL y Docker. Incluye carrito, pagos y panel admin."
  keywords="ecommerce laravel, tienda online react, proyecto full stack"
  url="https://misael-gomez.dev/projects/ecommerce"
  type="article"
  image="/projects/ecommerce-preview.jpg"
/>
```

### Página About:

```jsx
<SEO 
  title="Sobre mí"
  description="Desarrollador Full Stack con 3+ años de experiencia. Especializado en React, Laravel y arquitectura de software."
  url="https://misael-gomez.dev/about"
  type="profile"
/>
```

## 🎨 Personalización

### Cambiar información por defecto:

Edita `src/Components/SEO/SEO.jsx`:

```jsx
const SEO = ({ 
  title = 'TU TÍTULO POR DEFECTO',
  description = 'TU DESCRIPCIÓN POR DEFECTO',
  image = '/TU_IMAGEN.jpg',
  url = 'https://TU_DOMINIO.com',
  // ...
}) => {
  // ...
}
```

### Agregar más redes sociales:

```jsx
{/* LinkedIn específico */}
<meta property="og:site_name" content="Tu Nombre" />
<meta property="og:locale" content="es_MX" />

{/* Pinterest */}
<meta name="pinterest" content="nopin" />
```

## 📊 Structured Data (JSON-LD)

El componente incluye datos estructurados para que Google entienda mejor tu contenido:

### Person Schema:
```json
{
  "@type": "Person",
  "name": "Misael Gómez Cuautle",
  "jobTitle": "Full Stack Developer",
  "knowsAbout": ["React", "Laravel", "Docker"],
  "sameAs": ["LinkedIn", "GitHub"]
}
```

### WebSite Schema:
```json
{
  "@type": "WebSite",
  "name": "Portafolio de Misael",
  "url": "https://misael-gomez.dev"
}
```

## 🧪 Validación y Testing

### Herramientas para validar:

1. **Facebook Debugger**
   ```
   https://developers.facebook.com/tools/debug/
   ```
   - Pega tu URL
   - Verifica cómo se ve en Facebook

2. **Twitter Card Validator**
   ```
   https://cards-dev.twitter.com/validator
   ```
   - Valida Twitter Cards
   - Ve el preview

3. **LinkedIn Post Inspector**
   ```
   https://www.linkedin.com/post-inspector/
   ```
   - Valida Open Graph
   - Preview en LinkedIn

4. **Google Rich Results Test**
   ```
   https://search.google.com/test/rich-results
   ```
   - Valida Structured Data
   - Ve cómo Google interpreta tu página

5. **Schema Markup Validator**
   ```
   https://validator.schema.org/
   ```
   - Valida JSON-LD
   - Detecta errores en structured data

## 📸 Imagen Open Graph

### Especificaciones:
- **Dimensiones:** 1200x630 px
- **Ratio:** 1.91:1
- **Formato:** JPG o PNG
- **Peso:** < 300 KB (máx 8 MB)

### Qué incluir:
- Tu nombre/marca
- Título del proyecto/página
- Imágenes relevantes
- Colores de tu marca

### Herramientas para crear:
- [Canva](https://www.canva.com) - Plantillas gratis
- [Figma](https://www.figma.com) - Diseño profesional
- [OG Image Generator](https://og-image.vercel.app/) - Generador online

## 🔍 SEO Best Practices

### Title:
- ✅ Longitud: 50-60 caracteres
- ✅ Incluir palabra clave principal
- ✅ Único por página
- ✅ Formato: "Página | Marca"
- ❌ No keyword stuffing

### Description:
- ✅ Longitud: 150-160 caracteres
- ✅ Incluir call-to-action
- ✅ Única por página
- ✅ Describir valor único
- ❌ No duplicar el title

### Keywords:
- ✅ 5-10 keywords relevantes
- ✅ Investigar volumen de búsqueda
- ✅ Incluir long-tail keywords
- ❌ No usar keywords irrelevantes

### URL:
- ✅ Descriptiva y corta
- ✅ Incluir palabra clave
- ✅ Usar guiones (-)
- ❌ No usar underscores (_)
- ❌ No usar números o caracteres raros

## 📈 Monitoreo

### Google Search Console:
1. Verifica tu sitio
2. Envía sitemap.xml
3. Monitorea indexación
4. Ve clicks, impresiones, CTR

### Google Analytics:
1. Instala GA4
2. Monitorea tráfico orgánico
3. Ve páginas más visitadas
4. Analiza comportamiento

## 🔗 Archivos complementarios

Ya creados en tu proyecto:

```
/public/
├── sitemap.xml           # Mapa del sitio
├── robots.txt            # Instrucciones para bots
└── og-image.jpg          # Imagen Open Graph (debes crear)
```

### sitemap.xml:
- Lista todas tus URLs
- Prioridad de cada página
- Frecuencia de actualización
- Fecha de última modificación

### robots.txt:
- Qué bots pueden acceder
- Qué rutas indexar/bloquear
- Ubicación del sitemap

## 🚀 Deployment

### Al hacer deploy:

1. **Reemplazar URLs**:
   ```jsx
   // En SEO.jsx, cambiar:
   url = 'https://TU_DOMINIO_REAL.com'
   ```

2. **Actualizar sitemap.xml**:
   ```xml
   <loc>https://TU_DOMINIO_REAL.com/</loc>
   ```

3. **Verificar imagen OG**:
   - Debe estar en `/public/og-image.jpg`
   - Accesible en `https://tudominio.com/og-image.jpg`

4. **Validar con herramientas**:
   - Facebook Debugger
   - Twitter Validator
   - Google Rich Results

## 📝 Checklist pre-deploy

- [ ] Cambiar URLs a dominio real
- [ ] Crear og-image.jpg
- [ ] Actualizar sitemap.xml
- [ ] Validar robots.txt
- [ ] Verificar meta tags en producción
- [ ] Probar previews en redes sociales
- [ ] Enviar sitemap a Google Search Console
- [ ] Instalar Google Analytics

## 🔗 Referencias

- [Meta Tags - The Guide](https://metatags.io/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)

## ⚠️ Troubleshooting

### Los meta tags no aparecen:
- ¿Está el componente renderizando?
- ¿HelmetProvider está en main.jsx?
- Verifica con View Source (Ctrl+U)

### La imagen OG no se muestra:
- ¿La ruta es correcta?
- ¿La imagen existe en /public/?
- ¿El servidor la sirve correctamente?
- Borra cache: Facebook Debugger → "Scrape Again"

### Google no indexa mi página:
- ¿Robots.txt permite indexación?
- ¿Enviaste sitemap a Search Console?
- Espera 1-2 semanas para indexación inicial

### Los cambios no se ven en redes sociales:
- Redes sociales cachean previews
- Usa debuggers para forzar actualización
- Espera 24-48 horas
