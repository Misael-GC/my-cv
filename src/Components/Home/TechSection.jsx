import Section from "../shared/Section";
import {lazy, Suspense} from "react";

const Skills = lazy(() => import("../../Components/Skills"));


const TechSection = () => (
    <Section id="what-do" className="mb-10 mt-3">
        {/* <section className="mb-10 mt-3" id="what-do"> */}
          <div className="flex flex-col items-start justify-center pl-4 w-auto">
            <h2 className="text-slate-300 font-bold text-3xl mb-4">
              Tecnologías
            </h2>
            <p className="flex flex-wrap px-2 max-w-[900px] py-7 mx-auto text-slate-300 font-semibold text-lg">
              En mi viaje por el mundo del desarrollo de software, he adquirido
              habilidades en una variedad de tecnologías frontend como HTML,
              CSS, y ReactJS, Tailwind y backend como Django, PHP, Laravel,
              MySQL, SQL, Docker y Cloudflare. Además, continúo aprendiendo
              nuevas herramientas para mantenerme actualizado en el campo.
            </p>
          </div>
          <Suspense fallback={<div className="text-center text-slate-400">Cargando habilidades...</div>}>
          <Skills />
          </Suspense>
        {/* </section> */}
    </Section>
);

export default TechSection;