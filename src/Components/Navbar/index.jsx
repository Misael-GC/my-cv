import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";
import React, { useState, useEffect } from "react";
import "./index.css";

function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "education", "what-do", "portfolio"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "experience", label: "Experiencia" },
    {id: "education", label: "Educación"},
    { id: "what-do", label: "Habilidades" },
    { id: "portfolio", label: "Portafolio" },
  ];


  return (
    <nav className="flex bg-[#1f1934] text-white p-7 justify-between items-center fixed z-10 w-full top-0">

      <div className="text-2xl font-bold">MGC</div>


      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "text-gray-400" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex space-x-7 justify-around items-center">
        <a
          href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi LinkedIn"
          className="hover:text-gray-400  border-4 border-transparent hover:border-white transition-all inline-blockhover:border-white transition-all inline-block "
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/MisaelG51069440"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi Twitter"
          className="hover:text-gray-400 border-4 border-transparent hover:border-white transition-all inline-block"
        >
          <TfiTwitterAlt className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Misael-GC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi GitHub"
          className="hover:text-gray-400 border-4 border-transparent hover:border-white transition-all inline-block"
        >
          <ImGithub className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
