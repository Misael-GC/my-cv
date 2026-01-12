import { FaBriefcase, FaWarehouse, FaUserNinja, FaBrain, FaBloggerB, FaGraduationCap  } from "react-icons/fa";
import './index.css'

function Footer() {
  return (
    <footer className='flex flex-col bottom-2 lg:bottom-7 w-full overflow-hidden z-50 items-center text-white mb-3 sm-static fixed' id="sidebar"> {/*md:hidden*/}
      <ul className='w-full bg-white/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[520px] mx-auto px-5 flex justify-between text-2xl items-center'>
        
        {/* Home */}
        <a 
          href="#home" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/10 rounded-full hover:bg-secondary transition-all'
          title="Inicio"
        >
          <FaWarehouse className='w-15 bg-transparent'/>
        </a>

        {/* Sobre mí */}
        {/* <a 
          href="#about-me" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Sobre mí"
        >
          <FaUserNinja className='w-15 bg-transparent'/>
        </a> */}

        {/* Experiencia - NUEVO */}
        <a 
          href="#experience" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Experiencia"
        >
          <FaUserNinja className='w-15 bg-transparent'/>
        </a>

        {/* Educación - NUEVO */}
        <a 
          href="#education" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Formación"
        >
          <FaGraduationCap className='w-15 bg-transparent'/>
        </a>

        {/* Tecnologías */}
        <a 
          href="#what-do" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Tecnologías"
        >
          <FaBrain className='w-15 bg-transparent'/>
        </a>

        {/* Portafolio */}
        <a 
          href="#portfolio" 
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Portafolio"
        >
          <FaBriefcase className='w-15 bg-transparent'/>
        </a>

        {/* Blog */}
        <a 
          href='https://misael-gomez-cuautle.super.site/blog-personal-1' 
          target="_blank"
          rel="noopener noreferrer"
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full hover:bg-secondary transition-all'
          title="Blog"
        >
          <FaBloggerB className='w-15 bg-transparent'/>
        </a>
      </ul>
    </footer>
  )
}

export default Footer
