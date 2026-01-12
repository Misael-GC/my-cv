import Layout from '../../Components/Layout'
import SEO from '../../Components/SEO'
import Skills from '../../Components/Skills'
import CoverParticles from '../../Components/Cover-particle';
import './index.css'

function WhatDo() {
  return (
    <>
      <SEO 
        title="Tecnologías"
        description="Stack tecnológico completo: HTML, CSS, JavaScript, React, Tailwind, Laravel, PHP, Django, MySQL, Docker, Git y más. Conoce mis habilidades técnicas."
        keywords="tecnologías web, stack tecnológico, react js, laravel php, docker, mysql, tailwind css, habilidades técnicas"
        url="https://misael-gomez.dev/what-do"
      />
      <Layout>
        <section className='mb-10 mt-3'>
          <CoverParticles/>
          <div className='flex flex-col items-start justify-center pl-4 w-auto'>
            <h2 className='text-slate-300 font-bold text-3xl mb-4'>Tecnologías</h2>
            <p className='flex flex-wrap px-10 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg'>
            En mi viaje por el mundo del desarrollo de software, he adquirido habilidades en una variedad de tecnologías frontend como HTML, CSS, y ReactJS, Tailwind y backend como Django, PHP, Laravel, MySQL, SQL. Además,
            continúo aprendiendo nuevas herramientas para mantenerme actualizado en el campo.
            </p>
          </div>
          <Skills/>
        </section>
      </Layout>
    </>
  )
}

export default WhatDo
