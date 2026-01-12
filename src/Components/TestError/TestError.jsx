import { useState } from 'react';

/**
 * Componente de prueba para ErrorBoundary
 * Solo para desarrollo - eliminar en producción
 * 
 * USO:
 * import TestError from './Components/TestError';
 * <TestError />
 */

const TestError = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('🔥 Error de prueba provocado intencionalmente');
  }

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <button
        onClick={() => setShouldError(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105"
      >
        🧪 Probar ErrorBoundary
      </button>
    </div>
  );
};

export default TestError;
