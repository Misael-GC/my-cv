import Layout from '../../Components/Layout'
import Skills from '../../Components/Skills'
import CoverParticles from '../../Components/Cover-particle';
import './index.css'

function WhatDo() {

  return (
    <>
      <Layout>
        <section className='mb-10 mt-3'>
          <CoverParticles/>
          <div className='flex flex-col items-start justify-center pl-4 w-auto'>
            <h2 className='text-slate-300 font-bold text-3xl mb-4'>Tecnologías</h2>
            <p className='flex flex-wrap px-10 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg'>
            En mi viaje por el mundo del desarrollo de software, he adquirido habilidades en una variedad de tecnologías frontend como HTML, CSS, y ReactJS, Tailwind y backend como Django y SQL. Además,
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
