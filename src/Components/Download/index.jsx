const DownloadButton = () => {
  return (
      <a 
          className='btn btn-lg bg-black text-white px-4 py-2 rounded hover:bg-gray-200 border-2 hover:text-black border-white transition-all' 
          href="https://drive.google.com/file/d/1y2ZrFmkReIIMguSsdilMEsv3yfDzRWmX/view?usp=sharing" 
          target="_blank"
      >
          Descargar CV
      </a>
  );
};

export default DownloadButton;
