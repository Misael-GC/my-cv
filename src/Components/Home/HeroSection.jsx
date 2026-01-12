import Section from "../shared/Section";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../Download/index";
import Perfilimag from "../Perfilimag";
import CoverParticles from "../Cover-particle";


const HeroSection = () => (
  <Section id="home" className=" min-h-fit md:min-h-[85vh] flex items-center justify-center">
          <div className="container md:mx-auto flex flex-col items-center bg-no-repeat bg-gradient-cover pt-3  md:pt-0">
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
                <p className="mx-auto max-w-[600px] text-slate-300 font-semibold text-lg">
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
  </Section>
);


export default HeroSection;