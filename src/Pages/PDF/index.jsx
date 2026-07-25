import { useEffect, useRef } from 'react';

const PDF = () => {
  const enlaceDescargarPdfRef = useRef(null);

  useEffect(() => {
    // Intentar abrir el enlace automáticamente si el dispositivo es móvil
    if (typeof window.orientation !== "undefined" && enlaceDescargarPdfRef.current) {
      enlaceDescargarPdfRef.current.click();
    }
  }, []);

  const pdfUrl = '/CV Act.pdf'; // Ruta relativa al PDF dentro de la carpeta public

  return (
    <div className='mt-[87px]' style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <object
        data={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a 
          href={pdfUrl} 
          id="enlaceDescargarPdf"
          download="CV Act.pdf"
          ref={enlaceDescargarPdfRef}
          className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold underline"
        >
          Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
        </a>
      </object>
    </div>
  );
};

export default PDF;
