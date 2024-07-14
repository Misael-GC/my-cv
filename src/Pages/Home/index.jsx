import Layout from '../../Components/Layout'
import { TypeAnimation } from 'react-type-animation';
import DownloadButton from '../../Components/Download/index';
import Perfilimag from '../../Components/Perfilimag'
import CoverParticles from '../../Components/Cover-particle';
import './index.css'




function Home() {

  return (
    <>
      <Layout >
        <main className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center ' id='home' >
          <div className='container mx-auto flex min-h-[100vh] bg-no-repeat bg-gradient-cover pt-[220px] md:pt-0'> {/* aqui poner el pt-[220px] */}
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3 '>
              {/* text */}
              <CoverParticles/>
              <div className=''>
                <div className='my-5'>
                  <span className='text-slate-300 font-bold text-3xl'>Bienvenido a mi portafolio</span>
                </div>
                <div className='mb-6 text-[36px] lg:text-[25px] font-secondary font-semibold leading-[1]'>
                  {/* <span className='text-slate-300 font-semibold text-1xl'> Soy </span> */}
                  <TypeAnimation
                    sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Software Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Trainne',
                            2000,
                            'Data Engineer Trainne',
                            2000
                          ]}
                          wrapper="span"
                          speed={50}
                          // style={{ fontSize: '1.5em', display: 'inline-block' }}
                          className=' text-secondary font-bold text-2xl'
                          repeat={Infinity}
                  />
                </div>
                  <p className='mx-auto max-w-[500px] text-slate-300 font-semibold text-lg'>
                  Apasionado de la programación y desarrollo de software, con habilidades en Git, GitHub, HTML, CSS,
                  JavaScript, React, Linux, Excel, MySQL, SQL Server.
                  </p>
                  <div className='my-5 flex gap-5'>
                    <DownloadButton />
                    <a className='text-gradient btn-link hover:bg-black hover:text-white text-black px-4 py-2 rounded bg-gray-200 border-2  border-white transition-all' href="https://wa.me/522228718803" target='_blank'>Contactame</a>
                  </div>
              </div>
              {/* image */}
              <div className='mx-auto mb-[130px] md:mb-0'> {/* Aqui quiero que haga un espacio del footer que me estorba para ver la foto en tamaño movil*/}
                <Perfilimag/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Home
