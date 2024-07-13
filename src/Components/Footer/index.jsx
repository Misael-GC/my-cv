import { NavLink } from 'react-router-dom'
import { FaBriefcase, FaWarehouse, FaUserNinja, FaBrain, FaBloggerB  } from "react-icons/fa";
import './index.css'

function Footer() {


  return (
    <footer className='flex flex-col  bottom-2 lg:bottom-7 w-full overflow-hidden z-50 items-center text-white mb-3 fixed' id="sidebar">

        <ul className='w-full bg-white/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between 
        text-2xl  items-center'>

            <NavLink to='/' className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/10 rounded-full'> <FaWarehouse className='w-15 bg-transparent'/> </NavLink>
             <NavLink to='/about-me' className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full' > <FaUserNinja  className='w-15 bg-transparent'/> </NavLink>
            <NavLink to='/what-do' className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full'> <FaBrain className='w-15 bg-transparent'/> </NavLink>
            <NavLink to='/portfolio' className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full'> <FaBriefcase  className='w-15 bg-transparent'/> </NavLink>
            <NavLink to='https://misael-gomez-cuautle.super.site/blog-personal-1' target="_blank"  className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-black/20 rounded-full'> <FaBloggerB   className='w-15 bg-transparent'/> </NavLink>
        </ul>
    </footer>
  )
}

export default Footer