import Section from "../shared/Section";
import { FaGraduationCap, FaBook, FaCertificate, FaLaptopCode } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    type: "Universidad",
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: "Ingeniería en Finanzas",
    institution: "Universidad Politécnica de Puebla",
    period: "2017 - 2021",
    description: "Python, Excel con macros, administración, contabilidad, análisis de datos"
  },
  {
    id: 2,
    type: "Universidad",
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Desarrollo de software",
    institution: "IEU Universidad",
    period: "2023 - 2026",
    description: "Desarrollo web y mobil"
  },
  {
    id: 3,
    type: "courses",
    icon: <FaBook className="w-8 h-8" />,
    title: "Cursos y Certificaciones",
    institution: "Udemy, Platzi y freeCodeCamp",
    period: "2020 - Presente",
    description: "HTML, CSS, JS, PHP, Laravel, React, Docker, Linux, Arquitectura de Software"
  },
  {
    id: 4,
    type: "self",
    icon: <FaCertificate className="w-8 h-8" />,
    title: "Aprendizaje Autodidacta",
    institution: "Documentación oficial y proyectos personales",
    period: "Continuo",
    description: "Práctica constante con nuevas tecnologías y frameworks"
  }
];

const EducationCard = ({ icon, title, institution, period, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/20">
    <div className="flex items-start gap-4">
      <div className="text-secondary flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-slate-200 font-bold text-xl mb-2">{title}</h3>
        <p className="text-secondary font-semibold mb-2">{institution}</p>
        <p className="text-slate-400 text-sm mb-3">{period}</p>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  </div>
);

const EducationSection = () => (
  <Section id="education" className="min-h-fit py-20 flex items-center justify-center bg-slate-900/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-slate-300 font-bold text-3xl md:text-4xl mb-4">
          🎓 Formación Académica
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Mi trayectoria educativa y aprendizaje continuo
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {educationData.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>

    </div>
  </Section>
);

export default EducationSection;
