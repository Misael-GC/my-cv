import Layout from "../../Components/Layout";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../../Components/Download/index";
import Perfilimag from "../../Components/Perfilimag";
import CoverParticles from "../../Components/Cover-particle";
import TimeLine from "../../Components/TimeLine";
import {lazy, Suspense} from "react";
import "./index.css";

const PortfolioCard = lazy(() => import("../../Components/PortfolioCard"));
const Skills = lazy(() => import("../../Components/Skills"));


const SKeletonCard = () =>(
  <div className="animate-pulse">
    <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
  </div>
);


function Home() {
  return (
    <>
      <Layout>
        <section
          className="min-h-fit md:min-h-[85vh] flex items-center justify-center"
          id="home"
        >
          <div className="container mx-4 md:mx-auto flex flex-col items-center bg-no-repeat bg-gradient-cover pt-32  md:pt-0">
            {" "}
            {/* aqui poner el pt-[220px] */}
            <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3 ">
              {/* text */}
              <CoverParticles />
              <div className="">
                <div className="my-5">
                  <span className="text-slate-300 font-bold text-3xl">
                    Bienvenido a mi portafolio
                  </span>
                </div>
                <div className="mb-6 text-[36px] lg:text-[25px] font-secondary font-semibold leading-[1]">
                  {/* <span className='text-slate-300 font-semibold text-1xl'> Soy </span> */}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Desarrollador Web",
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Desarrollador Full Stack",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '1.5em', display: 'inline-block' }}
                    className=" text-secondary font-bold text-2xl"
                    repeat={Infinity}
                  />
                </div>
                <p className="mx-auto max-w-[500px] text-slate-300 font-semibold text-lg">
                  Apasionado de la programación y desarrollo de software, con
                  habilidades en Linux, Servidores, Docker, Git, GitHub, HTML,
                  CSS, JavaScript, React, Laravel, Excel, MySQL, SQL Server,
                  PHP, Cloudflare.
                </p>
                <div className="my-5 flex gap-5">
                  <DownloadButton />
                  <a
                    className="text-gradient btn-link hover:bg-black hover:text-white text-black px-4 py-2 rounded bg-gray-200 border-2  border-white transition-all text-center "
                    href="https://wa.me/522213061486"
                    target="_blank"
                  >
                    Contactame
                  </a>
                </div>
              </div>
              {/* image */}
              <div className="mx-auto mb-12 lg:mb-0 flex-shrink-0 w-full max-w-[300px] lg:max-w-[400px]">
                <Perfilimag />
              </div>
            </div>
          </div>
        </section>
        {/*---------------------------------------Aqui meter las demas secciones------------------------------------- */}
        <section className="min-h-[100vh] lg:min-h-[78vh] flex items-center justify-center mt-5" id="about-me">
          <div className="container mx-auto">
            <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-8 mx-auto ml-3">
              <div className="mb-[130px] md:mb-0">
                {" "}
                <div className="flex flex-col mx-auto items-start">
                  <h2 className="text-slate-300 font-bold text-3xl  md:ml-0 md:mb-7">
                    Sobre mí
                  </h2>
                  <p className="py-7 mx-auto max-w-[600px] text-slate-300 font-semibold text-lg">
                    Soy un entusiasta de la programación con un firme compromiso
                    en mejorar mis habilidades en el desarrollo de software.
                    <br />
                    Tengo experiencia en los siguientes puestos:
                    {/* <Database  className='w-10'/> */}
                  </p>
                </div>
                <TimeLine />
              </div>
            </div>
          </div>
        </section>
        {/* tecnologías */}
        <section className="mb-10 mt-3" id="what-do">
          <div className="flex flex-col items-start justify-center pl-4 w-auto">
            <h2 className="text-slate-300 font-bold text-3xl mb-4">
              Tecnologías
            </h2>
            <p className="flex flex-wrap px-2 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg">
              En mi viaje por el mundo del desarrollo de software, he adquirido
              habilidades en una variedad de tecnologías frontend como HTML,
              CSS, y ReactJS, Tailwind y backend como Django, PHP, Laravel,
              MySQL, SQL, Docker y Cloudflare. Además, continúo aprendiendo
              nuevas herramientas para mantenerme actualizado en el campo.
            </p>
          </div>
          <Suspense fallback={<div className="text-center text-slate-400">Cargando habilidades...</div>}>
          <Skills />
          </Suspense>
        </section>

        {/* Portafolio */}
        <section className="mb-10 mt-3" id="portfolio">
          <div className="flex flex-col items-start justify-center pl-4 w-auto">
            <h2 className="text-slate-300 font-bold text-3xl mb-4">
              Portafolio
            </h2>
            <p className="flex flex-wrap px-2 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg">
              En mi aprendizaje he desarrollado diferentes proyectos, donde he desarrollado y mejorado mis habilidades en los diferentes lenguajes donde aplico mis 
            conocimientos en el desarrollo de aplicaciones web y aplicaciones móviles.
            <br/>
            <br/> - Basico: proyectos de maquetación con HTML, CSS y JavaScript
            <br/> - Intermedio: proyectos donde implemento librerias com Taildwind, Bootstrap y React
            <br/> - Avanzado: proyectos donde implemento librerias Frontend y Backend
            </p>
          </div>
          {/* <Skills /> */}
        </section>
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {<SKeletonCard />}
          </div>
        }>
        <section className="mb-40"> 
          <PortfolioCard />
        </section>
        </Suspense>
      </Layout>
    </>
  );
}

export default Home;
