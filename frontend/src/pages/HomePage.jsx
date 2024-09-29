import { useState, useEffect } from "react";
import FriendsMeetingImage from "./../assets/images/friends-meeting.jpg";
import { MdEvent } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { PiArticle } from "react-icons/pi";
import { Link } from "react-router-dom";
import ShortLastArticle from "./homePageCOMPONENTS/ShortLastArticle";
import ShortNextEvent from "./homePageCOMPONENTS/ShortNextEvent";
import { Helmet } from "react-helmet-async";
import { FaTrain } from "react-icons/fa";
import { GiCapitol } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import CosaFacciamo from "./homePageCOMPONENTS/CosaFacciamo";
import AvvisoImportante from "./homePageCOMPONENTS/AvvisoImportante";

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Riduzione dell'immagine fino al 10% quando si scorre
  const shrinkStyle = {
    transform: `scale(${1 - Math.min(scrollY / 4000, 0.1)})`,
    transition: "transform 0.3s ease-in-out",
  };
  // Messaggio importante
  const messages = [
    "Avviso per Daniele e a tutti i membri del Consiglio di quartiere Bracciano Nuova, ho bisogno anche del vostro aiuto!",
    "Ho neccessità prima possibile di un feedback da parte vostra per quanta riguarda la struttura del progetto, vi sta piacendo?",
    "Per la prima domenica di ottombre ho bisogno di avere gia un po di dati da parte vostra come immagini di repertorio di bracciano",
    "possibilmente originali fatte dai membri evitando rogne di copyright, i nomi e cognomi dei membri, immagine di gruppo e links di contatto dell consiglio.",
    "Grazie e a presto, Stefan",
  ];

  return (
    <>
      <Helmet>
        {/* Metadati specifici per la HomePage */}
        <title>Home - Bracciano Nuova CqD</title>
        <meta
          name="description"
          content="Welcome to the homepage of our React app."
        />
      </Helmet>
      <main>
        <div className="App">
          <AvvisoImportante messages={messages} />
          {/* Il resto della tua pagina qui */}
        </div>
        <section className="flex flex-col">
          <div className="flex flex-col xl:flex-row">
            <img
              className="-mt-4 w-auto md:w-screen xl:w-[60vw] h-auto"
              src={FriendsMeetingImage}
              alt="Foto di Helena Lopes su Unsplash"
              style={shrinkStyle}
            />
            <div className="p-4">
              <p className="p-6 text-2xl leading-relaxed text-gray-800 font-serif">
                Benvenuti sul sito ufficiale del Consiglio di Quartiere di
                Bracciano Nuova! Qui troverete informazioni sul quartiere e
                potrete accedere a tutti i servizi offerti dalla nostra
                amministrazione tramite articoli, aggiornamenti e link ai nostri
                canali social.
              </p>
              <nav className="p-4">
                {/* ARTICLES LINK */}
                <Link
                  to="/articoli"
                  className="group flex items-center space-x-3 my-3"
                >
                  <PiArticle className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Ultime notizie
                  </h2>
                </Link>
                {/* EVENTS LINK */}
                <Link
                  to="/eventi"
                  className="group flex items-center space-x-3 my-3"
                >
                  <MdEvent className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Scopri gli eventi
                  </h2>
                </Link>
                {/* POSITION LINK */}
                <Link
                  to="/territorio"
                  className="group flex items-center space-x-3 my-3"
                >
                  <GiPositionMarker className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Scopri dove ci troviamo
                  </h2>
                </Link>
                {/* BUS & TRAIN LINK */}
                <Link
                  to="/territorio"
                  className="group flex items-center space-x-3 my-3"
                >
                  <FaTrain className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Fermate e orari treni e autobus
                  </h2>
                </Link>
                {/* COMUNE DI BRACCIANO LINK */}
                <Link
                  to="/#TODO"
                  className="group flex items-center space-x-3 my-3"
                >
                  <GiCapitol className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Comune di Bracciano
                  </h2>
                </Link>
                {/* SERVIZI LINK */}
                <Link
                  to="/servizi"
                  className="group flex items-center space-x-3 my-3"
                >
                  <FaConciergeBell className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Informazione sui Servizi
                  </h2>
                </Link>
                {/* CURIOSITà E STORIA LINK */}
                <Link
                  to="/#TODO"
                  className="group flex items-center space-x-3 my-3"
                >
                  <FaQuestionCircle className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                    Storia e Curiosità
                  </h2>
                </Link>
              </nav>
            </div>
          </div>
          {/* LAST SHORT ARTICLE AND NEXT SHORT EVENT */}
          <div className="xl:flex xl:justify-between xl:space-x-10">
            <section className="flex-1">
              <ShortLastArticle />
            </section>
            <section className="flex-1">
              <ShortNextEvent />
            </section>
          </div>
          <div>
            <CosaFacciamo />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
