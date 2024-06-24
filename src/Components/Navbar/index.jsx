
import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="flex bg-black text-white p-4 justify-between items-center fixed z-10 w-full">
    
      <ul className='flex items-center'>
        <div className="text-2xl font-bold">MGC</div>
      </ul>
      <ul className="flex space-x-4 justify-around items-center">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedin /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaFacebookF /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaInstagram /></a>
        <li>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Let s Connect</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar