import Section from "../shared/Section";
import { FaGraduationCap, FaBook, FaCertificate, FaLaptopCode } from "react-icons/fa";
import PropTypes from "prop-types";

const educationData = [
  {
    id: 1,
    type: "Universidad",
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Ingeniería en Finanzas",
    institution: "Universidad Politécnica de Puebla",
    period: "2017 - 2021",
    description: "Python, Excel con macros, administración, contabilidad, análisis de datos"
  },
  {
    id: 2,
    type: "Universidad",
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Desarrollo de software",
    institution: "IEU Universidad",
    period: "2023 - 2026",
    description: "Desarrollo web y móvil"
  },
  {
    id: 3,
    type: "courses",
    icon: <FaBook className="w-6 h-6" />,
    title: "Cursos y Certificaciones",
    institution: "Udemy, Platzi y freeCodeCamp",
    period: "2020 - Presente",
    description: "HTML, CSS, JS, PHP, Laravel, React, Docker, Linux, Arquitectura de Software"
  },
  {
    id: 4,
    type: "self",
    icon: <FaCertificate className="w-6 h-6" />,
    title: "Aprendizaje Autodidacta",
    institution: "Documentación oficial y proyectos personales",
    period: "Continuo",
    description: "Práctica constante con nuevas tecnologías y frameworks"
  }
];

const EducationCard = ({ icon, title, institution, period, description }) => (
  <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,216,255,0.15)] shadow-sm group">
    <div className="flex items-start gap-4">
      <div className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg group-hover:text-cyan-500 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-950/50 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl mb-1 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-2">{institution}</p>
        <p className="text-slate-400 dark:text-slate-500 text-xs tracking-wider uppercase mb-3">{period}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

EducationCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const EducationSection = () => (
  <Section id="education" className="min-h-fit py-24 flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-slate-900 dark:text-slate-200 font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">
          🎓 Formación Académica
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto font-light">
          Mi trayectoria educativa y aprendizaje autodidacta continuo
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {educationData.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </Section>
);

export default EducationSection;
