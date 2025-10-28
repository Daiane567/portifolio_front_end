import React from "react";
import { useTranslation } from "react-i18next";
import MyPhoto from '../../img/daiane2.jpeg'; // sua imagem enviada


export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white py-16">
      <h2 className="text-4xl font-bold text-emerald-400 mb-12 text-center">
        {t("about.title")}
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto px-6">
        {/* Foto */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_20px_#34d399]">
          <img
            src={MyPhoto}
            alt={t("about.photoAlt")}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 space-y-6 p-4 md:p-0">
          <h3 className="text-2xl font-semibold text-emerald-400">
            {t("about.subtitle")}
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {t("about.description")}
          </p>

          {/* Habilidades */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { name: "Python", value: 90 },
              { name: "C#", value: 85 },
              { name: "JavaScript", value: 80 },
              { name: "React", value: 75 },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <span className="text-gray-300">{skill.name}</span>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-emerald-400 h-3 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão para PDF */}
          <a
            href="../../../public/Daiane_full_stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-500 transition duration-300 shadow-lg shadow-emerald-400/20"
          >
            {t("about.cvButton")}
          </a>
        </div>
      </div>

      {/* Neon effect */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #34d399, 0 0 10px #34d399, 0 0 20px #34d399;
        }
      `}</style>
    </section>
  );
}
