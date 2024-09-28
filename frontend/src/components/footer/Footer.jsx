import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUtenteHaScollatoFinoAInizioFooter } from "./../../redux/slices/mainSlice";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./../../assets/images/braccianoNuovaLogo.png";

function Footer() {
  const dispatch = useDispatch();
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Se l'utente ha raggiunto o superato il footer
        if (footerTop <= windowHeight) {
          dispatch(setUtenteHaScollatoFinoAInizioFooter(true));
        } else {
          dispatch(setUtenteHaScollatoFinoAInizioFooter(false));
        }
      }
    };

    // Aggiungi l'evento di scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'evento di scroll quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <footer ref={footerRef} className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Sezione Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={Logo}
              alt="Logo di Bracciano Nuova"
              className="h-16 mr-3"
            />
            <h1 className="text-2xl font-bold">Bracciano Nuova</h1>
          </div>

          {/* Sezione Contatti */}
          <section aria-label="Contatti" className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">Contattaci</h2>
            <address>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@braccianonuova.com"
                  className="text-gray-300 hover:underline"
                >
                  info@braccianonuova.com
                </a>
              </p>
              <p>
                Telefono:{" "}
                <a
                  href="tel:+390123456789"
                  className="text-gray-300 hover:underline"
                >
                  +39 012 345 6789
                </a>
              </p>
            </address>
          </section>

          {/* Sezione Links Utili */}
          <section aria-label="Links Utili" className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">Links Utili</h2>
            <ul className="list-none mt-2">
              <li>
                <a href="/chisiamo" className="text-gray-300 hover:underline">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="/articoli" className="text-gray-300 hover:underline">
                  Articoli
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-gray-300 hover:underline">
                  Contatti
                </a>
              </li>
            </ul>
          </section>

          {/* Sezione Social Media */}
          <section
            aria-label="Social Media"
            className="hidden md:block mb-6 md:mb-0"
          >
            <h2 className="text-lg font-bold">Seguici</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-blue-400 transition duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl hover:text-blue-300 transition duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-pink-400 transition duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300" />
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Sezione Copyright */}
      <div className="text-center mt-6 border-t border-gray-300 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bracciano Nuova. Tutti i diritti
          riservati.
        </p>
        <p className="flex justify-center items-center text-sm">
          Creato da{" "}
          <span className="animate-pulse text-gradient ml-1">
            Stefan Hritcu
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
