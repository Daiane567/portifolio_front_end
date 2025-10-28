import { useTranslation } from "react-i18next";
import Navbar from "./assets/components/Navibar";
import HeroSection from "./assets/components/HeroSection";
import AboutMe from "./assets/components/AboutMe";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/Footer";
import "./index.css";

function App() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <div className="w-screen overflow-x-hidden bg-[#0a0a0a] text-white relative">
      {/* Passa a função toggleLanguage para o Navbar */}
      <Navbar toggleLanguage={toggleLanguage} currentLanguage={i18n.language} />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
