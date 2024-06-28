import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex flex-col fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 items-center mt-20 text-white'>
        <ul className='w-full bg-white/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-black/50 '>
            <li className='text-white'><NavLink to='/'>Home</NavLink></li>
            <li className='text-white'><NavLink to='/about-me'>ABOUT ME</NavLink></li>
            <li className='text-white'><NavLink to='/what-do'>WhatDo</NavLink></li>
            <li className='text-white'><NavLink to='/portfolio'>Portfolio</NavLink></li>
        </ul>
    </footer>
  )
}

export default Footer