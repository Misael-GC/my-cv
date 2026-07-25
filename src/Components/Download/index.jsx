const DownloadButton = () => {
  return (
    <a 
      className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/35 transition-all duration-300 text-center inline-block text-sm uppercase tracking-wider" 
      href="https://drive.google.com/file/d/1QZodchuar6_-Bbsk5BMbxxx9lyEINzSa/view?usp=sharing" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Descargar CV
    </a>
  );
};

export default DownloadButton;
