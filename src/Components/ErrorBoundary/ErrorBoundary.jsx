import { Component } from 'react';
import './ErrorBoundary.css';

/**
 * ErrorBoundary - Captura errores en componentes hijos
 * Implementa el patrón de manejo de errores de React
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componentes hijos a proteger
 * @param {React.ReactNode} props.fallback - UI alternativa opcional
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Registra el error en un servicio de logging
    console.error('ErrorBoundary capturó un error:', error, errorInfo);
    
    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));

    // Aquí puedes enviar el error a un servicio como Sentry
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // UI personalizada de error
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            {/* Icono de error */}
            <div className="error-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>

            {/* Título y descripción */}
            <h1 className="error-title">
              Algo salió mal
            </h1>
            <p className="error-description">
              Lo sentimos, ha ocurrido un error inesperado. 
              Nuestro equipo ha sido notificado y estamos trabajando en solucionarlo.
            </p>

            {/* Detalles del error (solo en desarrollo) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary className="error-details-summary">
                  Ver detalles técnicos
                </summary>
                <div className="error-details-content">
                  <p className="error-message">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="error-stack">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            {/* Botones de acción */}
            <div className="error-actions">
              <button 
                onClick={this.handleReset}
                className="btn-primary"
                aria-label="Intentar de nuevo"
              >
                Intentar de nuevo
              </button>
              <button 
                onClick={this.handleReload}
                className="btn-secondary"
                aria-label="Recargar página"
              >
                Recargar página
              </button>
              <a 
                href="/"
                className="btn-tertiary"
                aria-label="Volver al inicio"
              >
                Volver al inicio
              </a>
            </div>

            {/* Información de contacto */}
            <div className="error-contact">
              <p>¿El problema persiste?</p>
              <a 
                href="https://wa.me/522213061486" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Contáctame por WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Si no hay error, renderiza los hijos normalmente
    return this.props.children;
  }
}

export default ErrorBoundary;
