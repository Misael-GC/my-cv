import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./index.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "education", "what-do", "portfolio", "contact"];
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
    { id: "education", label: "Educación" },
    { id: "what-do", label: "Habilidades" },
    { id: "portfolio", label: "Portafolio" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="flex bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 text-slate-800 dark:text-white py-4 px-6 md:px-12 justify-between items-center fixed z-50 w-full top-0 transition-all duration-300">
      <div className="text-lg font-black tracking-[0.2em] text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
        MGC
      </div>

      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm tracking-wide transition-all duration-300 hover:text-cyan-600 dark:hover:text-cyan-400 ${
                activeSection === item.id
                  ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex space-x-4 items-center">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
          aria-label="Alternar Tema"
        >
          {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>

        <span className="w-px h-5 bg-slate-200 dark:bg-white/10 hidden sm:inline-block"></span>

        <a
          href="https://www.linkedin.com/in/misael-g%C3%B3mez-cuautle-5976491b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi LinkedIn"
          className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/MisaelG51069440"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi Twitter"
          className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
        >
          <TfiTwitterAlt className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Misael-GC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita mi GitHub"
          className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5"
        >
          <ImGithub className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
