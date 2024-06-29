import Layout from '../../Components/Layout'
import perfil from '../../images/perfil2.png'
import { TypeAnimation } from 'react-type-animation';
import DownloadButton from '../../Components/Download/index'
import './index.css'




function Home() {

  return (
    <>
      <Layout >
        <section className='section ' id='home' >
          <div className='container mx-auto'>
            <div>
              {/* text */}
              <div>
                <h1>
                  MISAEL <span>Gomez</span>
                </h1>
                <div className='mb-6 text-[36px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]'>
                  <span> Soy un </span>
                  <TypeAnimation
                    sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Frontend',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Analista de bases de datos SQL',
                            2000,
                            'Análisis de datos con Power BI',
                            2000
                          ]}
                          wrapper="span"
                          speed={50}
                          // style={{ fontSize: '1.5em', display: 'inline-block' }}
                          className='text-xl'
                          repeat={Infinity}
                  />
                </div>
                  <p>
                    Soy un entusiasta de la programación con un firme compromiso en mejorar mis habilidades en el desarrollo de software. 
                    Mi conjunto de habilidades abarca git, GitHub, HTML, CSS, JavaScript, React, Linux, así como un nivel intermedio en Excel y
                    competencias básicas en MySQL y SQL Server. Además de mi enfoque en el desarrollo de software, he acumulado experiencia 
                    sustancial en el mantenimiento de equipos de cómputo.
                  </p>
                  <div className='my-5 flex gap-5'>
                    <DownloadButton />
                    <a href="#contact" className='text-gradient btn-link bg-black text-white px-4 py-2 rounded hover:bg-gray-200 border-2 hover:text-black border-white transition-all'>Contactame</a>
                  </div>
              </div>
              {/* image */}
              <div >
                <img src={perfil} alt='profile' className='w-80' />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
