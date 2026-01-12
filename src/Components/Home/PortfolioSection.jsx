import Section from "../shared/Section";
import {lazy, Suspense} from "react";

const PortfolioCard = lazy(() => import("../../Components/PortfolioCard"));

const SKeletonCard = () =>(
  <div className="animate-pulse">
    <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
  </div>
);


const PortfolioSection = () => (
    <Section id="portfolio" className="mb-10 mt-3">
        
          <div className="flex flex-col justify-center pl-4 max-w-[900px] mx-auto w-auto">
            <h2 className="text-slate-300 font-bold text-3xl mb-4">
              Portafolio
            </h2>
            <p className="flex flex-wrap px-2 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg">
              En mi aprendizaje he desarrollado diferentes proyectos, donde he desarrollado y mejorado mis habilidades en los diferentes lenguajes donde aplico mis 
            conocimientos en el desarrollo de aplicaciones web y aplicaciones móviles.
            <br/>
            <br/> - Basico: proyectos de maquetación con HTML, CSS y JavaScript
            <br/> - Intermedio: proyectos donde implemento librerias com Taildwind, Bootstrap y React
            <br/> - Avanzado: proyectos donde implemento librerias Frontend y Backend
            </p>
          </div>

        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {<SKeletonCard />}
          </div>
        }>
        <section className="mb-40"> 
          <PortfolioCard />
        </section>
        </Suspense>
    </Section>
);

export default PortfolioSection;
