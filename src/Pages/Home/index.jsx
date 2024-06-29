import Layout from '../../Components/Layout'
import { TypeAnimation } from 'react-type-animation';
import DownloadButton from '../../Components/Download/index';
import Perfilimag from '../../Components/Perfilimag'
import './index.css'




function Home() {

  return (
    <>
      <Layout >
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center' id='home' >
          <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mx-auto ml-3'>
              {/* text */}
              <div>
                <div className='my-5'>
                  <span>Bienvenido a mi portafolio</span>
                </div>
                <div className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold leading-[1]'>
                  <span> Soy un </span>
                  <TypeAnimation
                    sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Frontend',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Analista de bases de datos SQL',
                            2000,
                            'Analista de datos con Power BI',
                            2000
                          ]}
                          wrapper="span"
                          speed={50}
                          // style={{ fontSize: '1.5em', display: 'inline-block' }}
                          className='text-xl'
                          repeat={Infinity}
                  />
                </div>
                  <p className='mx-auto max-w-[500px]'>
                  Apasionado de la programación y desarrollo de software, con habilidades en Git, GitHub, HTML, CSS,
                  JavaScript, React, Linux, Excel, MySQL, SQL Server y en mantenimiento de equipos de cómputo.
                  </p>
                  <div className='my-5 flex gap-5'>
                    <DownloadButton />
                    <a href="#contact" className='text-gradient btn-link hover:bg-black hover:text-white text-black px-4 py-2 rounded bg-gray-200 border-2 hover:text-black border-white transition-all'>Contactame</a>
                  </div>
              </div>
              {/* image */}
              <div className='mx-auto'>
                <Perfilimag/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
