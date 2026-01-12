import Layout from "../../Components/Layout";
import HeroSection from "../../Components/Home/HeroSection.jsx";
import AboutSection from "../../Components/Home/AboutSection.jsx";
import TechSection from "../../Components/Home/TechSection.jsx";
import PortfolioSection from "../../Components/Home/PortfolioSection.jsx";
import "./index.css";



function Home() {
  return (
    <>
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
