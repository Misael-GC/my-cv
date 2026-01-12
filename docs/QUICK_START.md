# 🚀 Guía de Inicio Rápido - SEO y ErrorBoundary

## ✅ ¿Qué se implementó?

### 1. **Componente SEO** 
✅ Instalado y configurado  
📍 Ubicación: `src/Components/SEO/`  
📖 Documentación: [`docs/SEO.md`](SEO.md)

### 2. **ErrorBoundary**
✅ Instalado y configurado  
📍 Ubicación: `src/Components/ErrorBoundary/`  
📖 Documentación: [`docs/ERROR_BOUNDARY.md`](ERROR_BOUNDARY.md)

### 3. **Archivos SEO**
✅ sitemap.xml  
✅ robots.txt  
⚠️ og-image.jpg (pendiente de crear)

---

## 🧪 Prueba rápida (5 minutos)

### Paso 1: Inicia el proyecto
```bash
pnpm dev
```

### Paso 2: Prueba ErrorBoundary

**Opción A - Botón de prueba:**
1. Descomenta en `src/Pages/Home/index.jsx`:
```jsx
import TestError from '../../Components/TestError';

// Al final del Layout, antes de </Layout>
<TestError />
```
2. Abre el navegador
3. Haz click en "🧪 Probar ErrorBoundary"
4. ✅ Deberías ver la pantalla de error personalizada

**Opción B - Provocar error manual:**
```jsx
// En cualquier componente
throw new Error('Prueba de error');
```

### Paso 3: Verifica SEO

1. Abre DevTools (F12)
2. Ve a la pestaña "Elements"
3. Busca `<head>`
4. ✅ Deberías ver meta tags como:
```html
<title>Inicio | Misael Gómez Cuautle</title>
<meta property="og:title" content="...">
<meta name="twitter:card" content="...">
<script type="application/ld+json">...</script>
```

### Paso 4: Valida en herramientas online

**Facebook Debugger:**
1. Build: `pnpm build`
2. Haz deploy (Vercel/Netlify)
3. Ve a: https://developers.facebook.com/tools/debug/
4. Pega tu URL
5. ✅ Verifica el preview

**Twitter Card Validator:**
1. Ve a: https://cards-dev.twitter.com/validator
2. Pega tu URL
3. ✅ Verifica el preview

---

## ⚙️ Configuración personalizada

### Actualizar tu información

1. **En SEO.jsx** (`src/Components/SEO/SEO.jsx`):
```jsx
// Línea 12-15
const SEO = ({ 
  title = 'TU NOMBRE - Full Stack Developer', // ← Cambiar aquí
  description = 'TU DESCRIPCIÓN',             // ← Cambiar aquí
  url = 'https://TU_DOMINIO.com',            // ← Cambiar aquí
```

2. **En sitemap.xml** (`public/sitemap.xml`):
```xml
<!-- Línea 11 -->
<loc>https://TU_DOMINIO.com/</loc>  <!-- ← Cambiar aquí -->
```

3. **Crear imagen OG**:
- Lee: `public/OG-IMAGE-README.md`
- Crea imagen: 1200x630 px
- Guarda como: `public/og-image.jpg`

### Probar cambios

```bash
# 1. Build
pnpm build

# 2. Preview local
pnpm preview

# 3. Abre http://localhost:4173
# 4. Verifica con View Source (Ctrl+U)
```

---

## 🐛 Troubleshooting

### ❌ "Cannot find module 'react-helmet-async'"
```bash
pnpm install react-helmet-async
```

### ❌ ErrorBoundary no funciona
- ¿Está envolviendo el componente correcto?
- ¿El error es en un event handler? (no se captura)
- Verifica la consola

### ❌ SEO no aparece en View Source
- ¿HelmetProvider está en main.jsx?
- ¿El componente SEO se renderiza?
- Verifica con React DevTools

### ❌ Meta tags duplicados
- Solo un `<SEO />` por página
- Revisa que no haya meta tags en index.html conflictivos

---

## 📚 Siguiente paso: Deploy

### Antes de hacer deploy:

1. ✅ Cambiar URLs a tu dominio real
2. ✅ Crear og-image.jpg
3. ✅ Actualizar sitemap.xml
4. ✅ Eliminar TestError de producción
5. ✅ Probar build local: `pnpm build && pnpm preview`

### Deploy en Vercel:
```bash
vercel
```

### Deploy en Netlify:
```bash
pnpm build
# Sube la carpeta dist/
```

### Después del deploy:

1. ✅ Verificar en Facebook Debugger
2. ✅ Verificar en Twitter Validator
3. ✅ Enviar sitemap a Google Search Console
4. ✅ Instalar Google Analytics

---

## 📖 Recursos adicionales

- [Documentación SEO completa](SEO.md)
- [Documentación ErrorBoundary completa](ERROR_BOUNDARY.md)
- [Laws of UX](https://lawsofux.com/es/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 💡 Tips

### SEO:
- Cada página necesita `<SEO />` único
- Títulos: 50-60 caracteres
- Descripciones: 150-160 caracteres
- Imagen OG: 1200x630 px

### ErrorBoundary:
- Solo captura errores de renderizado
- Para event handlers usa try-catch
- En producción oculta detalles técnicos

### Performance:
- Optimiza imágenes (< 300 KB)
- Usa lazy loading para componentes pesados
- Minimiza JavaScript con `pnpm build`

---

## ✅ Checklist final

Antes de considerar completo:

- [ ] SEO implementado en todas las páginas
- [ ] ErrorBoundary funcionando
- [ ] og-image.jpg creado
- [ ] sitemap.xml actualizado
- [ ] robots.txt configurado
- [ ] URLs cambiadas a dominio real
- [ ] Build sin errores
- [ ] Validado en Facebook/Twitter
- [ ] TestError eliminado de producción
- [ ] Deploy exitoso

---

**¿Necesitas ayuda?**  
Revisa la documentación completa en `docs/` o abre un issue en GitHub.

Hecho con ❤️ por Misael Gómez Cuautle
