import { useState, useEffect } from "react";
import FriendsMeetingImage from "./../assets/images/friends-meeting.jpg";
import { MdEvent } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import ShortLastArticle from "./homePageCOMPONENTS/ShortLastArticle";
import ShortsArticlesForHomePage from "./homePageCOMPONENTS/ShortsArticlesForHomePage";
import { GrArticle } from "react-icons/gr";

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

  return (
    <>
      <main>
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
                {/* EVENTS LINK */}
                <Link to="/eventi" className="flex items-center space-x-3 mb-6">
                  <MdEvent className="text-3xl text-blue-600" />
                  <a
                    href="#eventi"
                    className="text-2xl font-bold text-blue-700 hover:underline"
                  >
                    Scopri gli eventi
                  </a>
                </Link>
                {/* POSITION LINK */}
                <Link to="/posizione" className="flex items-center space-x-3">
                  <GiPositionMarker className="text-3xl text-blue-600" />
                  <a
                    href="#dove-troviamo"
                    className="text-2xl font-bold text-blue-700 hover:underline"
                  >
                    Scopri dove ci troviamo
                  </a>
                </Link>
              </nav>
            </div>
          </div>
          <section className="flex flex-col xl:flex-row-reverse">
            <ShortLastArticle />
            {/* VAI ALLA SEZIONE DI TUTTI GLI ARTICOLI */}
            <Link
              to="/articoli"
              className="flex items-center space-x-3 mt-2 sm:ml-6 p-6 xl:ml-0 xl:p-2 xl:mr-10"
            >
              <GrArticle className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-blue-700 hover:underline">
                VAI ALLA SEZIONE DI TUTTI GLI ARTICOLI
              </span>
            </Link>
          </section>
        </section>
        <ShortsArticlesForHomePage />
      </main>
    </>
  );
}

export default HomePage;
