import ProfilePic from "./../assets/images/programmatoreImg.png";
import { TbWorld } from "react-icons/tb";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiSass,
  SiExpress,
  SiRedux,
} from "react-icons/si";

function ContattaProgrammatore() {
  return (
    <div className="bg-gray-900 text-white py-12 md:-mt-10 px-4 md:px-16 lg:px-32 mt-22">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Foto del Programmatore */}
        <div className="flex-shrink-0">
          <img
            src={ProfilePic}
            alt="Programmatore Stefan Hritcu"
            className="rounded-full w-64 h-64 object-contain shadow-lg border-4 border-gray-700"
          />
        </div>

        {/* Informazioni Personali */}
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-2 text-blue-400">
            Stefan Hritcu
          </h1>
          <p className="text-xl font-medium mb-4">
            Frontend Developer | Data Management Enthusiast
          </p>
          <p className="text-lg mb-6">
            Ciao! Sono Stefan, un programmatore specializzato nello sviluppo
            frontend con buone competenze anche nel backend. Mi dedico alla
            creazione di applicazioni web ottimizzate, con particolare
            attenzione a tecnologie moderne come React, Next.js e Angular. Mi
            occupo della gestione dei dati utilizzando Redux e della gestione
            dei file in formato JSON, oltre a implementare soluzioni che evitano
            l&apos;utilizzo di database e server tramite la creazione di codice
            in file di documento.
          </p>

          {/* Sezione di Contatto */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 my-6 ml-6">
            <div className="flex items-bottom">
              <TbWorld className="w-6 h-6 mr-1" />
              <a
                href="mailto:stefan@example.com"
                className="text-lg hover:text-blue-400 transition duration-300"
              >
                stefan-hritcu.dev
              </a>
            </div>
            <div className="flex items-bottom">
              <FaGithub className="w-6 h-6 mr-1" />
              <a
                href="https://github.com/stefanhritcu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-300 transition duration-300"
              >
                Profilo Github
              </a>
            </div>
            <div className="flex items-bottom">
              <ImLinkedin className="w-6 h-6 mr-1" />
              <a
                href="https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-500 transition duration-300"
              >
                Profilo Linkedin
              </a>
            </div>
            <div className="flex items-bottom">
              <FaFacebook className="w-6 h-6 mr-1" />
              <a
                href="https://facebook.com/stefanhritcu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-400 transition duration-300"
              >
                Profilo Facebook
              </a>
            </div>
          </div>

          {/* Competenze Tecniche */}
          <div>
            <h2 className="text-3xl font-bold mt-12 my-8">
              Competenze Tecniche
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
              <Skill
                name="HTML5"
                icon={<SiHtml5 />}
                link="https://html.spec.whatwg.org/"
                color="text-orange-500"
              />
              <Skill
                name="CSS3"
                icon={<SiCss3 />}
                link="https://www.w3.org/Style/CSS/Overview.en.html"
                color="text-blue-500"
              />
              <Skill
                name="JavaScript"
                icon={<SiJavascript />}
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                color="text-yellow-500"
              />
              <Skill
                name="React"
                icon={<SiReact />}
                link="https://reactjs.org/"
                color="text-blue-600"
              />
              <Skill
                name="Next.js"
                icon={<SiNextdotjs />}
                link="https://nextjs.org/"
                color="text-black"
              />
              <Skill
                name="Angular"
                icon={<SiAngular />}
                link="https://angular.io/"
                color="text-red-600"
              />
              <Skill
                name="TailwindCSS"
                icon={<SiTailwindcss />}
                link="https://tailwindcss.com/"
                color="text-cyan-400"
              />
              <Skill
                name="Node.js"
                icon={<SiNodedotjs />}
                link="https://nodejs.org/"
                color="text-green-600"
              />
              <Skill
                name="MongoDB"
                icon={<SiMongodb />}
                link="https://www.mongodb.com/"
                color="text-green-700"
              />
              <Skill
                name="TypeScript"
                icon={<SiTypescript />}
                link="https://www.typescriptlang.org/"
                color="text-blue-600"
              />
              <Skill
                name="Git"
                icon={<SiGit />}
                link="https://git-scm.com/"
                color="text-orange-700"
              />
              <Skill
                name="GitHub"
                icon={<SiGithub />}
                link="https://github.com/"
                color="text-gray-600"
              />
              <Skill
                name="Bootstrap"
                icon={<SiBootstrap />}
                link="https://getbootstrap.com/"
                color="text-purple-600"
              />
              <Skill
                name="Sass"
                icon={<SiSass />}
                link="https://sass-lang.com/"
                color="text-pink-400"
              />
              <Skill
                name="Express.js"
                icon={<SiExpress />}
                link="https://expressjs.com/"
                color="text-gray-600"
              />
              <Skill
                name="Redux"
                icon={<SiRedux />}
                link="https://redux.js.org/"
                color="text-purple-600"
              />
            </div>
          </div>

          {/* Sezione di Collaborazione */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Collaborazioni</h2>
            <p className="text-lg">
              Sono disponibile per collaborazioni su progetti che richiedono
              competenze tecniche solide e un approccio professionale. Se hai
              un&apos;idea o un progetto da realizzare, sono qui per trasformare
              le tue visioni in realtà. La mia esperienza e il mio impegno sono
              a tua disposizione per garantire risultati concreti e di qualità.
              Contattami per discutere come posso contribuire al successo delle
              tue iniziative.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function Skill({ name, icon, link, color }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${color} hover:text-blue-400 transition duration-300`}
      >
        <span className="text-5xl">{icon}</span>
        <span className="text-lg">{name}</span>
      </a>
    </div>
  );
}

export default ContattaProgrammatore;
