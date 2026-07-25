import Section from "../shared/Section";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../Download/index";
import Perfilimag from "../Perfilimag";
import CoverParticles from "../Cover-particle";

const HeroSection = () => (
  <Section id="home" className="min-h-fit md:min-h-[85vh] flex items-center justify-center py-12 md:py-0">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
      <CoverParticles />
      
      <div className="flex-1 text-left">
        {/* Subtítulo de bienvenida futurista */}
        <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
          Bienvenido a mi espacio digital
        </div>

        {/* Nombre y Título principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight leading-none mb-6">
          Hola, soy <span className="bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-white dark:via-slate-100 dark:to-cyan-400 bg-clip-text text-transparent">Misael Gómez</span>
        </h1>

        {/* Descripción concisa y fluida */}
        <p className="font-light text-base md:text-lg mb-8 text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
          Desarrollador Full Stack enfocado en construir experiencias web innovadoras, interfaces intuitivas y arquitecturas robustas usando tecnologías modernas.
        </p>

         {/* Animación de tipografía de especialización */}
        <div className="mb-8 p-4 bg-white dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-xl max-w-lg shadow-sm">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Especialidades</span>
          <TypeAnimation
            sequence={[
              "Desarrollo Full Stack",
              2000,
              "Backend (PHP, Python, Laravel)",
              2000,
              "Frontend (React & Tailwind)",
              2000,
              "DevOps & Containers (Docker)",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-cyan-600 dark:text-cyan-400 font-extrabold text-xl md:text-2xl"
            repeat={Infinity}
          />
        </div>

        {/* Botones de CTA modernizados */}
        <div className="flex flex-wrap gap-4 items-center">
          <DownloadButton />
          <a
            className="bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold px-6 py-3 rounded-lg border border-cyan-500/30 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 text-center inline-block text-sm uppercase tracking-wider"
            href="https://wa.me/522213061486"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>
        </div>
      </div>

      {/* Imagen de perfil con contenedor flotante */}
      <div className="flex-shrink-0 w-full max-w-[260px] md:max-w-[320px] lg:max-w-[360px]">
        <Perfilimag />
      </div>
    </div>
  </Section>
);

export default HeroSection;
