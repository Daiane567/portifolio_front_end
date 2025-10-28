import { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", type: "success" });

  const API_URL = "https://portfolio-backend-api-jpzu.onrender.com/api/contato";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const data = await response.json();

      if (response.ok) {
        setModal({ show: true, message: data.message || t("contact.successMessage"), type: "success" });
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setModal({ show: true, message: data.error || t("contact.errorMessage"), type: "error" });
      }
    } catch (err) {
      console.error("Erro ao conectar com a API:", err);
      setModal({ show: true, message: t("contact.connectionError"), type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h2 className="text-4xl font-bold text-emerald-400 mb-8">{t("contact.title")}</h2>

      <div className="bg-[#111111] p-8 rounded-xl shadow-lg shadow-emerald-400/20 w-full max-w-md flex flex-col items-center">
        <h3 className="text-emerald-400 text-lg font-semibold mb-6">{t("contact.subtitle")}</h3>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("contact.fields.nome")}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <input
            type="email"
            placeholder={t("contact.fields.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <textarea
            placeholder={t("contact.fields.mensagem")}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none h-28"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className={`bg-emerald-400 text-black font-semibold py-2 rounded-md hover:bg-emerald-500 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? t("contact.buttons.enviando") : t("contact.buttons.enviar")}
          </button>
        </form>
      </div>

      {/* Modal de sucesso/erro */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className={`bg-[#111111] p-6 rounded-xl shadow-lg w-80 text-center`}>
            <h3 className={`text-lg font-semibold mb-2 ${modal.type === "success" ? "text-emerald-400" : "text-red-500"}`}>
              {modal.type === "success" ? "Sucesso" : "Erro"}
            </h3>
            <p className="text-white mb-4">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="px-4 py-2 bg-emerald-400 text-black rounded-md hover:bg-emerald-500 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
