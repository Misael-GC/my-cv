import Layout from "../../Components/Layout";
import SEO from "../../Components/SEO";
import HeroSection from "../../Components/Home/HeroSection.jsx";
//import AboutSection from "../../Components/Home/AboutSection.jsx";
import ExperienceSection from "../../Components/Home/ExperienceSection.jsx";
import EducationSection from "../../Components/Home/EducationSection.jsx";
import TechSection from "../../Components/Home/TechSection.jsx";
import SoftSkillsSection from "../../Components/Home/SoftSkillsSection.jsx";
import PortfolioSection from "../../Components/Home/PortfolioSection.jsx";
import "./index.css";

function Home() {
  return (
    <>
      <SEO 
        title="Inicio"
        description="Desarrollador Full Stack especializado en React, Laravel, PHP, Docker y tecnologías web modernas. Explora mi portafolio de proyectos y experiencia profesional."
        keywords="desarrollador web, full stack developer, react, laravel, php, javascript, docker, mysql, tailwind css, desarrollo web méxico"
        url="https://misael-gomez.dev"
        type="website"
      />
      <Layout>
        {/* Hero - Primera impresión */}
        <HeroSection />
        
        {/* Sobre mí - Breve introducción */}
        {/* <AboutSection /> */}
        
        {/* Experiencia Laboral - OBLIGATORIO según @mouredev */}
        <ExperienceSection />
        
        {/* Formación Académica - OBLIGATORIO según @mouredev */}
        <EducationSection />
        
        {/* Tecnologías - Habilidades técnicas */}
        <TechSection />
        
        {/* Habilidades Blandas - RECOMENDABLE según @mouredev */}
        <SoftSkillsSection />
        
        {/* Portafolio - Proyectos destacados */}
        <PortfolioSection />
      </Layout>
    </>
  );
}

export default Home;
