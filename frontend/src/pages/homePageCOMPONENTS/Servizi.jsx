import { Link } from "react-router-dom"; // Importa Link
import CategoriaDiServizi from "./../../DATA/SERVIZI/Servizi";

import CittadiniImage from "./../../assets/servizi/cittadini-img.jpg";
import CommercioImage from "./../../assets/servizi/commercio-img.jpg";
import SocialiImage from "./../../assets/servizi/sociali-img.jpg";
import RicretiveImage from "./../../assets/servizi/ricretive-img.jpg";
import IniziativeImage from "./../../assets/servizi/iniziative-img.jpg";

const Servizi = () => {
  return (
    <div className="p-8 bg-gray-100 -mt-14">
      <head>
        <link rel="preload" href={CittadiniImage} as="image" />
        <link rel="preload" href={CommercioImage} as="image" />
        <link rel="preload" href={SocialiImage} as="image" />
        <link rel="preload" href={RicretiveImage} as="image" />
        <link rel="preload" href={IniziativeImage} as="image" />
      </head>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary">Servizi Offerti</h1>
        <p className="text-gray-600 mt-2">
          Scopri i servizi disponibili per la comunità.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CategoriaDiServizi.map((categoria) => (
          <section
            key={categoria.name}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            aria-labelledby={`categoria-${categoria.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <Link
              to={categoria.path}
              aria-label={`Vai ai servizi di ${categoria.name}`}
            >
              <h2
                id={`categoria-${categoria.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="text-3xl font-semibold mb-4"
              >
                {categoria.name}
              </h2>
              <img
                src={
                  categoria.name === "Servizi per i Cittadini"
                    ? CittadiniImage
                    : categoria.name === "Commercio"
                    ? CommercioImage
                    : categoria.name === "Servizi Sociali"
                    ? SocialiImage
                    : categoria.name === "Attività Ricreative"
                    ? RicretiveImage
                    : IniziativeImage
                }
                alt={categoria.name}
                className="w-full h-auto mb-4 rounded"
              />
            </Link>
            <p className="text-gray-700 mb-4">{categoria.description}</p>
            <p className="text-gray-500 mb-4">{categoria.content}</p>
            <ul className="space-y-3">
              {categoria.servizi.map((servizio, index) => (
                <li key={index} className="border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-medium">{servizio.title}</h3>
                  <p className="text-gray-600">{servizio.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Servizi;
