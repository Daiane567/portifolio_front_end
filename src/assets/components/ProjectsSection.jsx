import { useState } from "react";
import { motion } from "framer-motion";

// --- Dados simulados ---
const projetos = [
  {
    titulo: "E-Commerce",
    descricao: "Loja virtual moderna com integração de pagamento.",
    imagem: "https://via.placeholder.com/300x200?text=E-Commerce",
  },
  {
    titulo: "Portfolio Pessoal",
    descricao: "Modelo responsivo para profissionais criativos.",
    imagem: "https://via.placeholder.com/300x200?text=Portfolio",
  },
  {
    titulo: "Dashboard Admin",
    descricao: "Painel administrativo com gráficos e autenticação.",
    imagem: "https://via.placeholder.com/300x200?text=Dashboard",
  },
  {
    titulo: "Blog React",
    descricao: "Plataforma simples de blog usando React e Node.js.",
    imagem: "https://via.placeholder.com/300x200?text=Blog",
  },
];

const certificados = [
  {
    titulo: "Certificado React",
    descricao: "Curso de desenvolvimento de aplicações React.",
    imagem: "https://via.placeholder.com/300x200?text=React+Certificado",
  },
  {
    titulo: "Certificado JavaScript",
    descricao: "Curso avançado de JavaScript moderno.",
    imagem: "https://via.placeholder.com/300x200?text=JavaScript+Certificado",
  },
  {
    titulo: "Certificado Node.js",
    descricao: "Curso completo de backend com Node.js.",
    imagem: "https://via.placeholder.com/300x200?text=Node+Certificado",
  },
];

const tecnologias = [
  { nome: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nome: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nome: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nome: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nome: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { nome: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nome: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nome: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
];

// --- Animação genérica ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsSection() {
  const [abaAtiva, setAbaAtiva] = useState("projetos");

  return (
    <section className="bg-black text-white py-20 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-green-400 mb-10">Projetos</h2>

      {/* Botões de navegação */}
      <div className="flex gap-4 mb-14">
        <button
          onClick={() => setAbaAtiva("projetos")}
          className={`px-5 py-2 rounded-xl border border-green-400 transition ${
            abaAtiva === "projetos"
              ? "bg-green-500 text-black font-semibold"
              : "hover:bg-green-500 hover:text-black"
          }`}
        >
          Projetos
        </button>

        <button
          onClick={() => setAbaAtiva("certificados")}
          className={`px-5 py-2 rounded-xl border border-green-400 transition ${
            abaAtiva === "certificados"
              ? "bg-green-500 text-black font-semibold"
              : "hover:bg-green-500 hover:text-black"
          }`}
        >
          Certificados
        </button>

        <button
          onClick={() => setAbaAtiva("tecnologias")}
          className={`px-5 py-2 rounded-xl border border-green-400 transition ${
            abaAtiva === "tecnologias"
              ? "bg-green-500 text-black font-semibold"
              : "hover:bg-green-500 hover:text-black"
          }`}
        >
          Tecnologias
        </button>
      </div>

      {/* Conteúdo dinâmico */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full flex justify-center"
      >
        {abaAtiva === "projetos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl px-6">
            {projetos.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0d0d0d] rounded-2xl p-4 shadow-lg hover:scale-105 transition"
              >
                <img src={p.imagem} alt={p.titulo} className="rounded-xl w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">{p.titulo}</h3>
                <p className="text-gray-400 text-sm">{p.descricao}</p>
              </motion.div>
            ))}
          </div>
        )}

        {abaAtiva === "certificados" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl px-6">
            {certificados.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0d0d0d] rounded-2xl p-4 shadow-lg hover:scale-105 transition"
              >
                <img src={c.imagem} alt={c.titulo} className="rounded-xl w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">{c.titulo}</h3>
                <p className="text-gray-400 text-sm">{c.descricao}</p>
              </motion.div>
            ))}
          </div>
        )}

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
    </section>
  );
}
