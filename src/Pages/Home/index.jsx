import Layout from "../../Components/Layout";
import SEO from "../../Components/SEO";
import HeroSection from "../../Components/Home/HeroSection.jsx";
import AboutSection from "../../Components/Home/AboutSection.jsx";
import TechSection from "../../Components/Home/TechSection.jsx";
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
        <HeroSection />
        <AboutSection />
        <TechSection />
        <PortfolioSection />
      </Layout>
    </>
  );
}

export default Home;
