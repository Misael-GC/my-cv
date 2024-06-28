
import { FaLinkedin } from 'react-icons/fa';
import { ImGithub, ImWhatsapp } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";

import './index.css'

function Navbar() {
  return (
    <nav className="flex bg-black text-white p-4 justify-between items-center fixed z-10 w-full fixed top-0">
        <ul className='flex items-center'>
          <div className="text-2xl font-bold">MGC</div>
        </ul>

        <ul className="flex space-x-10 justify-around items-center">
          <div className='flex space-x-7 justify-around items-center'>
            <a href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400  border-4 border-transparent hover:border-white transition-all inline-blockhover:border-white transition-all inline-block "><FaLinkedin className='w-5 h-5'/></a>
            <a href="https://x.com/MisaelG51069440" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 border-4 border-transparent hover:border-white transition-all inline-block"><TfiTwitterAlt className='w-5 h-5'/></a>
            <a href="https://github.com/Misael-GC" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 border-4 border-transparent hover:border-white transition-all inline-block"><ImGithub className='w-5 h-5'/></a>
          </div>
          <div>
            <a className="bg-black text-white px-4 py-2 rounded hover:bg-gray-200 border-2 hover:text-black border-white transition-all" href="https://wa.me/522228718803" target='_blank'>Contáctame</a>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar