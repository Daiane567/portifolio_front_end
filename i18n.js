import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      // Navbar
      navbar: {
        home: "Home",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato"
      },

      // Hero Section
      hero: {
        greeting: "Olá, eu sou",
        name: "Daiane",
        subtitle: "Desenvolvedora Full Stack |",
        description:
          "Sou uma Desenvolvedora Full Stack com experiência prática em Front-End e Back-End. Tenho conhecimento sólido em React, Node.js, Python e C#, o que me permite criar aplicações completas, desde interfaces modernas até funcionalidades robustas no servidor.",
        contactButton: "Contate-me",
        photoAlt: "Foto de perfil"
      },

      // About Section
      about: {
        title: "Sobre Mim",
        photoAlt: "Minha Foto",
        subtitle: "Desenvolvedor Apaixonado",
        description:
          "Sou estudante de tecnologia e apaixonada por desenvolvimento e programação. Adoro criar soluções que funcionam e fazem sentido na prática. Tenho me dedicado a aprender diversas linguagens e ferramentas, como Python, C#, JavaScript e React, e cada projeto que construo me motiva a explorar ainda mais o mundo da tecnologia.",
        cvButton: "Baixar CV"
      },

      // Contact Section
      contact: {
        title: "Contato",
        subtitle: "Entre em Contato",
        fields: {
          nome: "Digite seu nome",
          email: "Digite seu email",
          mensagem: "Escreva sua mensagem"
        },
        buttons: {
          enviar: "Enviar",
          enviando: "Enviando..."
        },
        messages: {
          success: "Mensagem enviada com sucesso!",
          error: "Mensagem enviada com sucesso!",
          connectionError: "Mensagem enviada com sucesso!"
        }
      },

      // Projects Section
      projects: {
        title: "Projetos",
        tabs: {
          projetos: "Projetos",
          certificados: "Certificados",
          tecnologias: "Tecnologias"
        },
        projetos: {
          milaPet: {
            titulo: "Mila Pet",
            descricao: "Loja virtual moderna usando React e Node.js."
          },
          descarte: {
            titulo: "Descarte Sustentável",
            descricao: "Projeto realizado em C#."
          },
          login: {
            titulo: "Login",
            descricao: "Login em React e Node.js."
          },
          game: {
            titulo: "Game",
            descricao: "Plataforma de jogos em React e Python."
          }
        },
        certificados: {
          backend: {
            titulo: "Introdução ao Back-end",
            descricao: ".NET e IA com a Avanade"
          },
          tecnologo: {
            titulo: "Tecnólogo",
            descricao: "Análise e Desenvolvimento de Sistemas - PUC Minas"
          },
          python: {
            titulo: "Python",
            descricao: "Avançando na orientação a objeto."
          },
          sass: {
            titulo: "Sass e Compass",
            descricao: "Descomplicando o CSS."
          }
        }
      }
    }
  },

  en: {
    translation: {
      // Navbar
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },

      // Hero Section
      hero: {
        greeting: "Hi, I am",
        name: "Daiane",
        subtitle: "Full Stack Developer |",
        description:
          "I am a Full Stack Developer with hands-on experience in Front-End and Back-End. I have strong knowledge in React, Node.js, Python, and C#, which allows me to build complete applications from modern interfaces to robust server functionalities.",
        contactButton: "Contact Me",
        photoAlt: "Profile photo"
      },

      // About Section
      about: {
        title: "About Me",
        photoAlt: "My Photo",
        subtitle: "Passionate Developer",
        description:
          "I am a technology student passionate about development and programming. I love creating solutions that work and make sense in practice. I have been learning various languages and tools, such as Python, C#, JavaScript, and React, and each project I build motivates me to explore the world of technology even further.",
        cvButton: "Download CV"
      },

      // Contact Section
      contact: {
        title: "Contact",
        subtitle: "Get in Touch",
        fields: {
          nome: "Enter your name",
          email: "Enter your email",
          mensagem: "Write your message"
        },
        buttons: {
          enviar: "Send",
          enviando: "Sending..."
        },
        messages: {
          success: "Message sent successfully!",
          error: "Error sending the message",
          connectionError: "Server connection error"
        }
      },

      // Projects Section
      projects: {
        title: "Projects",
        tabs: {
          projetos: "Projects",
          certificados: "Certificates",
          tecnologias: "Technologies"
        },
        projetos: {
          milaPet: {
            titulo: "Mila Pet",
            descricao: "Modern online store using React and Node.js."
          },
          descarte: {
            titulo: "Sustainable Disposal",
            descricao: "Project implemented in C#."
          },
          login: {
            titulo: "Login",
            descricao: "Login system in React and Node.js."
          },
          game: {
            titulo: "Game",
            descricao: "Gaming platform in React and Python."
          }
        },
        certificados: {
          backend: {
            titulo: "Backend Introduction",
            descricao: ".NET and AI with Avanade"
          },
          tecnologo: {
            titulo: "Technologist",
            descricao: "Analysis and Systems Development - PUC Minas"
          },
          python: {
            titulo: "Python",
            descricao: "Advancing in object-oriented programming."
          },
          sass: {
            titulo: "Sass and Compass",
            descricao: "Simplifying CSS."
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
