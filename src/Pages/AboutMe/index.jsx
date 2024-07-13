import Layout from '../../Components/Layout'
import Perfilimag from '../../Components/Perfilimag'
import './index.css'
import CoverParticles from '../../Components/Cover-particle';

function AboutMe() {

  return (
    <>
      <Layout >
      <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center'>
        <div className="container mx-auto">
        <CoverParticles/>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3'>
          <Perfilimag/>
            <div>
              <h2 className="text-5xl font-bold">Sobre mi</h2>
              <p className="py-4 mx-auto max-w-[600px]">
              Soy un entusiasta de la programación con un firme compromiso en mejorar mis habilidades en el desarrollo de software.
                <br/>Tengo experiencia en los siguientes puestos:
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  )
}

export default AboutMe
