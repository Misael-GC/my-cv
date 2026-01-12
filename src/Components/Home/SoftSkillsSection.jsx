import Section from "../shared/Section";
import { FaUsers, FaComments, FaLightbulb, FaClock, FaHandshake, FaRocket } from "react-icons/fa";

const softSkillsData = [
  {
    id: 1,
    icon: <FaUsers className="w-8 h-8" />,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva con equipos multidisciplinarios y desarrollo ágil"
  },
  {
    id: 2,
    icon: <FaComments className="w-8 h-8" />,
    title: "Comunicación",
    description: "Capacidad para explicar conceptos técnicos de forma clara y efectiva"
  },
  {
    id: 3,
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Resolución de Problemas",
    description: "Pensamiento analítico y creativo para encontrar soluciones eficientes"
  },
  {
    id: 4,
    icon: <FaClock className="w-8 h-8" />,
    title: "Gestión del Tiempo",
    description: "Organización y cumplimiento de deadlines bajo metodologías ágiles"
  },
  {
    id: 5,
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Adaptabilidad",
    description: "Aprendizaje rápido de nuevas tecnologías y adaptación al cambio"
  },
  {
    id: 6,
    icon: <FaRocket className="w-8 h-8" />,
    title: "Proactividad",
    description: "Iniciativa para mejorar procesos y proponer soluciones innovadoras"
  }
];

const SoftSkillCard = ({ icon, title, description }) => (
  <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/10 hover:scale-105">
    <div className="flex flex-col items-center text-center">
      <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-slate-200 font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  </div>
);

const SoftSkillsSection = () => (
  <Section id="soft-skills" className="min-h-fit py-20 flex items-center justify-center">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-slate-300 font-bold text-3xl md:text-4xl mb-4">
          🤝 Habilidades Blandas
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Más allá del código: competencias que hacen la diferencia
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {softSkillsData.map((skill) => (
          <SoftSkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  </Section>
);

export default SoftSkillsSection;
