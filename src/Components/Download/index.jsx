// DownloadButton.jsx
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../public/CV Act.pdf'; // Ruta relativa desde la carpeta `public`
    link.download = 'CV Act.pdf'; // Nombre con el que se descargará el archivo
    link.click();
  };

  return (
    <button onClick={handleDownload} className='btn btn-lg bg-black text-white px-4 py-2 rounded hover:bg-gray-200 border-2 hover:text-black border-white transition-all'>
      Descargar CV
    </button>
  );
};

export default DownloadButton;
