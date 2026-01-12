import Section from "../shared/Section";
import TimeLine from "../TimeLine";


const AboutSection = () => (
  <Section
    id="about-me"
    className=""
  >
              <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-8 mx-auto ml-3">
                  <div className="mb-[130px] md:mb-0">
                  
                    <div className="flex flex-col mx-auto items-start">
                      <h2 className="text-slate-300 font-bold text-3xl  md:ml-0 md:mb-7">
                        Sobre mí
                      </h2>
                      <p className="py-7 mx-auto max-w-[850px] text-slate-300 font-semibold text-lg">
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
            {/* </section> */}
  </Section>
);

export default AboutSection;
