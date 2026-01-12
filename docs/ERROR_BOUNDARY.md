# 🛡️ ErrorBoundary - Documentación

## ¿Qué es?
ErrorBoundary es un componente de React que captura errores de JavaScript en cualquier parte del árbol de componentes hijo, registra esos errores y muestra una interfaz de usuario alternativa en lugar de que la aplicación se rompa completamente.

## 🎯 Características

### ✅ Lo que hace:
- Captura errores durante el renderizado
- Captura errores en métodos del ciclo de vida
- Captura errores en constructores de componentes hijos
- Muestra una UI alternativa cuando ocurre un error
- Registra información del error en la consola
- Proporciona opciones para recuperarse del error

### ❌ Lo que NO hace:
- No captura errores en event handlers (onClick, onChange, etc.)
- No captura errores en código asíncrono (setTimeout, callbacks)
- No captura errores en el mismo ErrorBoundary
- No captura errores durante el Server-Side Rendering

## 📦 Estructura

```
src/Components/ErrorBoundary/
├── ErrorBoundary.jsx      # Componente principal
├── ErrorBoundary.css      # Estilos
└── index.js               # Export
```

## 🚀 Uso

### Uso básico (ya implementado en main.jsx):

```jsx
import ErrorBoundary from './Components/ErrorBoundary';

<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Uso en secciones específicas:

```jsx
// Proteger solo una sección
<ErrorBoundary>
  <PortfolioCard />
</ErrorBoundary>

// Múltiples ErrorBoundaries
<div>
  <ErrorBoundary>
    <Header />
  </ErrorBoundary>
  
  <ErrorBoundary>
    <MainContent />
  </ErrorBoundary>
  
  <ErrorBoundary>
    <Footer />
  </ErrorBoundary>
</div>
```

## 🧪 Cómo probar que funciona

### Opción 1: Crear un componente que lance error

```jsx
// src/Components/TestError.jsx
const TestError = () => {
  throw new Error('¡Error de prueba!');
  return <div>Esto no se mostrará</div>;
};

// Úsalo en cualquier página
<ErrorBoundary>
  <TestError />
</ErrorBoundary>
```

### Opción 2: Botón de prueba

```jsx
const [shouldError, setShouldError] = useState(false);

if (shouldError) {
  throw new Error('Error provocado intencionalmente');
}

return (
  <button onClick={() => setShouldError(true)}>
    Provocar error de prueba
  </button>
);
```

## 🎨 Personalización

### Cambiar colores:
Edita `ErrorBoundary.css`:

```css
.btn-primary {
  background: #TU_COLOR; /* Cambiar color primario */
}
```

### Agregar logging a servicios externos:

```jsx
// En ErrorBoundary.jsx, método componentDidCatch
componentDidCatch(error, errorInfo) {
  // Sentry
  // Sentry.captureException(error, { extra: errorInfo });
  
  // LogRocket
  // LogRocket.captureException(error, { extra: errorInfo });
  
  // Custom API
  // fetch('/api/log-error', {
  //   method: 'POST',
  //   body: JSON.stringify({ error, errorInfo })
  // });
}
```

## 📊 Estados del componente

```javascript
state = {
  hasError: false,      // Si hay error activo
  error: null,          // Objeto del error
  errorInfo: null,      // Info adicional del stack
  errorCount: 0         // Contador de errores
}
```

## 🔄 Métodos disponibles

### `handleReset()`
Limpia el error y permite intentar renderizar de nuevo.

### `handleReload()`
Recarga la página completamente.

## 🌐 Diferencias en Producción vs Desarrollo

### Desarrollo (`NODE_ENV === 'development'`):
- Muestra detalles técnicos del error
- Muestra el stack trace completo
- Útil para debugging

### Producción (`NODE_ENV === 'production'`):
- Oculta detalles técnicos
- Muestra mensaje genérico amigable
- No expone información sensible

## 📝 Notas importantes

1. **No reemplaza try-catch**: Para errores en event handlers, usa try-catch
2. **Un ErrorBoundary por sección crítica**: No pongas todo en uno solo
3. **Testing**: Siempre prueba en desarrollo antes de producción
4. **Logging**: En producción, envía errores a un servicio de monitoreo

## 🔗 Referencias
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Error Boundaries - React Docs (Legacy)](https://legacy.reactjs.org/docs/error-boundaries.html)

## ⚠️ Troubleshooting

### El ErrorBoundary no captura mi error:
- ¿Es un error en un event handler? → Usa try-catch
- ¿Es código asíncrono? → Usa try-catch
- ¿El error es en el mismo ErrorBoundary? → Necesitas otro ErrorBoundary padre

### No veo los detalles del error en producción:
- Es correcto, por seguridad no se muestran
- Usa un servicio de logging (Sentry, LogRocket)

### El botón "Intentar de nuevo" no funciona:
- El error podría ser permanente
- Usa "Recargar página" en su lugar
- Revisa la consola para ver el error original
