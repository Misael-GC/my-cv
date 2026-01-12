import Section from "../shared/Section";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../Download/index";
import Perfilimag from "../Perfilimag";
import CoverParticles from "../Cover-particle";

const HeroSection = () => (
  <Section id="home" className=" min-h-fit md:min-h-[85vh] flex items-center justify-center">
    <div className="container md:mx-auto flex flex-col items-center bg-no-repeat bg-gradient-cover pt-3  md:pt-0">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3 ">
        <CoverParticles />
        
        <div className="">
          {/* Nombre destacado */}
          <div className="my-5">

            <span className="text-slate-300 font-bold text-3xl md:text-4xl">
              Bienvenido a mi portafolio
            </span>
          </div>

          {/* Descripción concisa */}
          <p className="mx-auto max-w-[600px] font-medium text-base md:text-lg mb-6 text-slate-400 max-w-2xl">
            Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas. 
            Especializado en <span className="text-secondary font-semibold">PHP</span>, 
            con dominio de Docker, MySQL y arquitecturas escalables.
          </p>

           {/* Habilidad principal clara */}
          <div className="mb-6">
            <h2 className="text-slate-300 font-semibold text-lg mb-2">
              Especializado en:
            </h2>
            <TypeAnimation
              sequence={[
                "Laravel Development",
                2000,
                "PHP Backend Expert",
                2000,
                "Frontend con React & Bootstrap",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-secondary font-bold text-2xl md:text-3xl"
              repeat={Infinity}
            />
          </div>

          {/* CTAs */}
          <div className="my-5 flex flex-wrap gap-4">
            <DownloadButton />
            <a
              className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-3 rounded-lg border-2 border-secondary transition-all text-center inline-block"
              href="https://wa.me/522213061486"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctame
            </a>
            {/* <a
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg border-2 border-white transition-all text-center inline-block"
              href="#portfolio"
            >
              Ver proyectos
            </a> */}
          </div>
        </div>

        {/* Imagen */}
        <div className="mx-auto mb-12 lg:mb-0 flex-shrink-0 w-full max-w-[300px] lg:max-w-[400px]">
          <Perfilimag />
        </div>
      </div>
    </div>
  </Section>
);

export default HeroSection;
