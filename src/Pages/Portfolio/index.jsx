import CoverParticles from '../../Components/Cover-particle'
import Layout from '../../Components/Layout'
import SEO from '../../Components/SEO'
import PortfolioCard from '../../Components/PortfolioCard'
import './index.css'

function Portafolio() {
  return (
    <>
      <SEO 
        title="Portafolio"
        description="Explora mis proyectos de desarrollo web. Aplicaciones con React, Laravel, PHP, MySQL y Docker. Proyectos básicos, intermedios y avanzados."
        keywords="portafolio web, proyectos react, proyectos laravel, aplicaciones web, desarrollo frontend, desarrollo backend"
        url="https://misael-gomez.dev/portfolio"
      />
      <Layout>
        <section className='mt-3 md:mb-[135px] mb-[130px] w-full'> 
          <CoverParticles/>
          <div className='flex flex-col items-start justify-center pl-4 w-auto '>
            <h2 className='text-slate-300 font-bold text-3xl mb-4 lg:pl-32'>Portafolio</h2>
            <p className='flex flex-wrap px-10 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg'>
            En mi aprendizaje he desarrollado diferentes proyectos, donde he desarrollado y mejorado mis habilidades en los diferentes lenguajes donde aplico mis 
            conocimientos en el desarrollo de aplicaciones web y aplicaciones móviles.
            <br/>
            <br/> - Básico: proyectos de maquetación con HTML, CSS y JavaScript
            <br/> - Intermedio: proyectos donde implemento librerías como Tailwind, Bootstrap y React
            <br/> - Avanzado: proyectos donde implemento librerías Frontend y Backend
            </p>
          </div>
          <PortfolioCard/>
        </section>
      </Layout>
    </>
  )
}

export default Portafolio
