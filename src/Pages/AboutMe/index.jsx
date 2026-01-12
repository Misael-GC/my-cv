import Layout from '../../Components/Layout';
import SEO from '../../Components/SEO';
import './index.css';
import CoverParticles from '../../Components/Cover-particle';
// import TimeLine from '../../Components/TimeLine';

function AboutMe() {
  return (
    <>
      <SEO 
        title="Sobre mí"
        description="Conoce mi trayectoria profesional como desarrollador Full Stack. Experiencia en desarrollo web con React, Laravel, PHP y gestión de servidores."
        keywords="sobre mí, experiencia laboral, trayectoria profesional, desarrollador full stack, react developer, php developer"
        url="https://misael-gomez.dev/about-me"
      />
      <Layout>
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center mt-3 '>
          <div className="container mx-auto">
            <CoverParticles />
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3'>
              <div className='mb-[130px] md:mb-0'> {/* evitar que lo tape el footer, contiene la información del texto y time line*/}
                <div className='flex flex-col '>
                  <h2 className="text-slate-300 font-bold text-3xl">Sobre mí</h2>
                  <p className="py-7 mx-auto max-w-[525px] text-slate-300 font-semibold text-lg">
                    Soy un entusiasta de la programación con un firme compromiso en mejorar mis habilidades en el desarrollo de software.
                    Con una curiosidad insaciable por las nuevas tecnologías, siempre busco aprender y aplicar conocimientos que me permitan crear soluciones innovadoras y eficientes.
                  </p>
                </div>
                    {/* <TimeLine /> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AboutMe;
