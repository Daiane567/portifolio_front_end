import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ toggleLanguage, currentLanguage }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // IDs devem bater com os elementos do App.jsx
  const links = [
    { name: t("navbar.home"), id: "hero" },
    { name: t("navbar.about"), id: "about" },
    { name: t("navbar.projects"), id: "projects" },
    { name: t("navbar.contact"), id: "contact" },
  ];

  const handleClick = (link) => {
    setActive(link.name);
    setIsOpen(false);

    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-emerald-400/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="font-orbitron text-emerald-400">Portfolio</span>
        </h1>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleClick(link)}
                className={`appearance-none bg-none border-none outline-none cursor-pointer font-medium text-base transition-colors duration-300
                  ${active === link.name ? "text-emerald-400" : "text-white hover:text-emerald-400"}`}
              >
                {link.name}
              </button>
            </li>
          ))}

          {/* Botão de idioma */}
          <li className="ml-6">
            <button
              onClick={toggleLanguage}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/50 transition duration-300"
            >
              {currentLanguage === "pt" ? "EN" : "PT"}
            </button>
          </li>
        </ul>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden bg-[#0a0a0a] border-t border-emerald-400/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleClick(link)}
                className={`appearance-none bg-none border-none outline-none cursor-pointer font-medium text-lg transition-colors duration-300
                  ${active === link.name ? "text-emerald-400" : "text-white hover:text-emerald-400"}`}
              >
                {link.name}
              </button>
            </li>
          ))}
          {/* Botão de idioma mobile */}
          <li>
            <button
              onClick={toggleLanguage}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/50 transition duration-300 mt-2"
            >
              {currentLanguage === "pt" ? "EN" : "PT"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
