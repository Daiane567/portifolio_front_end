import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Imagens
import C from '../../img/c.png';
import Sass from '../../img/sass.png';
import Puc from '../../img/puc.png';
import Python from '../../img/python.png';
import Pet from '../../img/pet.png';
import Descart from '../../img/descart.png';
import Login from '../../img/login.png';
import Jogo from '../../img/jogo.png';

// --- Dados simulados ---
const projetos = [
  {
    key: "milaPet",
    url: "https://mila-pet-shop.vercel.app/",
    imagem: Pet,
  },
  {
    key: "descarte",
    url:"https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t2-descarte-sustentavel.git",
    imagem: Descart
  },
  {
    key: "login",
    url: "https://login-client-pied.vercel.app/",
    imagem: Login,
  },
  {
    key: "game",
    url: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e4-proj-infra-t3-games.git",
    imagem: Jogo,
  },
];

const certificados = [
  { key: "backend", imagem: C },
  { key: "tecnologo", imagem: Puc },
  { key: "python", imagem: Python },
  { key: "sass", imagem: Sass },
];

const tecnologias = [
  { nome: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nome: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nome: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nome: "IA", img: "https://cdn-icons-png.flaticon.com/512/190/190769.png" },
  { nome: "Vite", img: "https://vitejs.dev/logo.svg" },
  { nome: "NoSQL", img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  { nome: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { nome: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { nome: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { nome: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nome: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { nome: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { nome: "Trello", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { nome: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nome: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

// --- Animação genérica ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [abaAtiva, setAbaAtiva] = useState("projetos");
  const [modalAberto, setModalAberto] = useState(false);
  const [certSelecionado, setCertSelecionado] = useState(null);

  const abrirModal = (cert) => {
    setCertSelecionado(cert);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setCertSelecionado(null);
  };

  return (
    <section id="projects" className="bg-[#0a0a0a] text-white py-20 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-emerald-400 mb-10">{t("projects.title")}</h2>

      {/* Botões de navegação */}
      <div className="flex gap-4 mb-14">
        <button
          onClick={() => setAbaAtiva("projetos")}
          className={`px-5 py-2 rounded-xl border border-emerald-400 transition ${
            abaAtiva === "projetos"
              ? "bg-emerald-400 text-black font-semibold"
              : "hover:bg-emerald-500 hover:text-black"
          }`}
        >
          {t("projects.tabs.projetos")}
        </button>

        <button
          onClick={() => setAbaAtiva("certificados")}
          className={`px-5 py-2 rounded-xl border border-emerald-400 transition ${
            abaAtiva === "certificados"
              ? "bg-emerald-400 text-black font-semibold"
              : "hover:bg-emerald-500 hover:text-black"
          }`}
        >
          {t("projects.tabs.certificados")}
        </button>

        <button
          onClick={() => setAbaAtiva("tecnologias")}
          className={`px-5 py-2 rounded-xl border border-emerald-400 transition ${
            abaAtiva === "tecnologias"
              ? "bg-emerald-400 text-black font-semibold"
              : "hover:bg-emerald-500 hover:text-black"
          }`}
        >
          {t("projects.tabs.tecnologias")}
        </button>
      </div>

      {/* Conteúdo dinâmico */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full flex justify-center"
      >
        {/* Projetos */}
        {abaAtiva === "projetos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl px-6">
            {projetos.map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0d0d0d] rounded-2xl p-4 shadow-lg hover:scale-105 transition shadow-emerald-400/20 block"
              >
                <img src={p.imagem} alt={t(`projects.projetos.${p.key}.titulo`)} className="rounded-xl w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">{t(`projects.projetos.${p.key}.titulo`)}</h3>
                <p className="text-gray-300 text-sm">{t(`projects.projetos.${p.key}.descricao`)}</p>
              </motion.a>
            ))}
          </div>
        )}

        {/* Certificados */}
        {abaAtiva === "certificados" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl px-6">
            {certificados.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0d0d0d] rounded-2xl p-4 shadow-lg hover:scale-105 transition shadow-emerald-400/20 cursor-pointer"
                onClick={() => abrirModal(c)}
              >
                <img src={c.imagem} alt={t(`projects.certificados.${c.key}.titulo`)} className="rounded-xl w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">{t(`projects.certificados.${c.key}.titulo`)}</h3>
                <p className="text-gray-300 text-sm">{t(`projects.certificados.${c.key}.descricao`)}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tecnologias */}
        {abaAtiva === "tecnologias" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {tecnologias.map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={t.img} alt={t.nome} className="w-20 h-20" />
                <span className="text-gray-300 font-semibold">{t.nome}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Modal de certificado */}
      {modalAberto && certSelecionado && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={fecharModal}
        >
          <div className="bg-[#0a0a0a] p-6 rounded-2xl shadow-lg max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-2xl text-white"
              onClick={fecharModal}
            >
              ✕
            </button>
            <img
              src={certSelecionado.imagem}
              alt={t(`projects.certificados.${certSelecionado.key}.titulo`)}
              className="w-full h-auto rounded-xl"
            />
            <h3 className="text-2xl font-bold text-emerald-400 mt-4">{t(`projects.certificados.${certSelecionado.key}.titulo`)}</h3>
            <p className="text-gray-300 mt-2">{t(`projects.certificados.${certSelecionado.key}.descricao`)}</p>
          </div>
        </div>
      )}
    </section>
  );
}
