import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="home" className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>

        <div className="flex gap-4 mt-4 md:mt-0 text-green-400 text-xl">
          <a href="https://github.com/Daiane567" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daianecardoso23/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
