import Section from "../shared/Section";
import { FaUsers, FaComments, FaLightbulb, FaClock, FaHandshake, FaRocket } from "react-icons/fa";
import PropTypes from "prop-types";

const softSkillsData = [
  {
    id: 1,
    icon: <FaUsers className="w-6 h-6" />,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva con equipos multidisciplinarios y desarrollo ágil"
  },
  {
    id: 2,
    icon: <FaComments className="w-6 h-6" />,
    title: "Comunicación",
    description: "Capacidad para explicar conceptos técnicos de forma clara y efectiva"
  },
  {
    id: 3,
    icon: <FaLightbulb className="w-6 h-6" />,
    title: "Resolución de Problemas",
    description: "Pensamiento analítico y creativo para encontrar soluciones eficientes"
  },
  {
    id: 4,
    icon: <FaClock className="w-6 h-6" />,
    title: "Gestión del Tiempo",
    description: "Organización y cumplimiento de deadlines bajo metodologías ágiles"
  },
  {
    id: 5,
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Adaptabilidad",
    description: "Aprendizaje rápido de nuevas tecnologías y adaptación al cambio"
  },
  {
    id: 6,
    icon: <FaRocket className="w-6 h-6" />,
    title: "Proactividad",
    description: "Iniciativa para mejorar procesos y proponer soluciones innovadoras"
  }
];

const SoftSkillCard = ({ icon, title, description }) => (
  <div className="group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,216,255,0.15)] shadow-sm">
    <div className="flex flex-col items-center text-center">
      <div className="text-cyan-600 dark:text-cyan-400 mb-4 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg group-hover:text-cyan-500 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-950/25 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

SoftSkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const SoftSkillsSection = () => (
  <Section id="soft-skills" className="min-h-fit py-24 flex items-center justify-center">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-slate-900 dark:text-slate-200 font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
          🤝 Habilidades Blandas
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-slate-650 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto font-light">
          Más allá del código: competencias interpersonales clave
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
