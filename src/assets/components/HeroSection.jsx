import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import AnimatedSquare from "./AnimatedSquare";
import MyImage from '../../img/daiane2.jpeg';
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const squares = Array.from({ length: 15 }).map((_, i) => (
    <AnimatedSquare
      key={i}
      size={8 + Math.random() * 12}
      duration={5 + Math.random() * 15}
      delay={Math.random() * 5}
    />
  ));

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden text-white relative"
    >
      {squares}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: "#34d399" },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: { min: 4, max: 8 } },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-10"
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-20">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {t("hero.greeting")} <span className="text-emerald-400">{t("hero.name")}</span>
          </h2>

          <h3 className="text-2xl text-emerald-400 font-medium">
            <Typewriter
              words={[t("hero.subtitle")]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            {t("hero.description")}
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 pt-4">
            <a
              href="#contact"
              className="bg-emerald-400 text-black font-semibold px-8 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-400/20"
            >
              {t("hero.contactButton")}
            </a>

            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/Daiane567"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/daianecardoso23/"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-emerald-400/50 shadow-[0_0_40px_#34d399]">
            <img
              src={MyImage}
              alt={t("hero.photoAlt")}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
