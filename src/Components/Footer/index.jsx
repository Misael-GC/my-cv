import { FaBriefcase, FaWarehouse, FaUserNinja, FaBrain, FaBloggerB, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import './index.css';

function Footer() {
  return (
    <footer className="flex flex-col bottom-4 w-full overflow-hidden z-40 items-center text-white fixed" id="sidebar">
      <ul className="w-full bg-slate-950/60 h-[70px] backdrop-blur-xl rounded-full border border-white/5 max-w-[520px] mx-auto px-6 flex justify-between text-xl items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Home */}
        <a 
          href="#home" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Inicio"
        >
          <FaWarehouse className="bg-transparent"/>
        </a>

        {/* Experiencia */}
        <a 
          href="#experience" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Experiencia"
        >
          <FaUserNinja className="bg-transparent"/>
        </a>

        {/* Educación */}
        <a 
          href="#education" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Formación"
        >
          <FaGraduationCap className="bg-transparent"/>
        </a>

        {/* Tecnologías */}
        <a 
          href="#what-do" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Tecnologías"
        >
          <FaBrain className="bg-transparent"/>
        </a>

        {/* Portafolio */}
        <a 
          href="#portfolio" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Portafolio"
        >
          <FaBriefcase className="bg-transparent"/>
        </a>

        {/* Contacto */}
        <a 
          href="#contact" 
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Contacto"
        >
          <FaEnvelope className="bg-transparent"/>
        </a>

        {/* Blog */}
        <a 
          href="https://misael-gomez-cuautle.super.site/blog-personal-1" 
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
          title="Blog"
        >
          <FaBloggerB className="bg-transparent"/>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
