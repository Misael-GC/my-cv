import Section from "../shared/Section";
import EnhancedTimeLine from "../TimeLine/EnhancedTimeLine";

const ExperienceSection = () => (
  <Section id="experience" className="min-h-fit py-20 flex items-center justify-center bg-slate-900/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-slate-300 font-bold text-3xl md:text-4xl mb-4">
          💼 Experiencia Laboral
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Mi trayectoria profesional desarrollando soluciones tecnológicas
        </p>
      </div>
      
      <EnhancedTimeLine />

    </div>
  </Section>
);


export default ExperienceSection;
