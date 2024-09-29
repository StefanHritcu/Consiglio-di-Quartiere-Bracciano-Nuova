import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./../../assets/images/braccianoNuovaLogo.png";
import { Link } from "react-router-dom";
import {
  setIstContattaProgrammatoreClicked,
  setUtenteHaScollatoFinoAInizioFooter,
} from "../../redux/slices/mainSlice";

function Footer() {
  const dispatch = useDispatch();
  const footerRef = useRef(null);
  const canvasRef = useRef(null);
  const statusContattaProgrammatore = useSelector(
    (state) => state.forDev.isContattaProgrammatoreClicked
  );

  const handleClickedOnContattaProgrammatore = () => {
    dispatch(setIstContattaProgrammatoreClicked(!statusContattaProgrammatore));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop <= windowHeight) {
          dispatch(setUtenteHaScollatoFinoAInizioFooter(true));
        } else {
          dispatch(setUtenteHaScollatoFinoAInizioFooter(false));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const balls = [];
    const colors = [
      "rgba(131,164,212,0.8)",
      "rgba(137,194,217,0.6)",
      "rgba(173,181,189,0.5)",
      "rgba(163,188,247,0.7)",
      "rgba(69,123,157,0.6)",
    ];

    // Crea palline con dimensioni, opacità e velocità casuali
    for (let i = 0; i < 25; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10, // Palline di diverse dimensioni
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 3, // Velocità casuale in x
        dy: (Math.random() - 0.5) * 3, // Velocità casuale in y
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);

        // Aggiungi un effetto sfumato
        const gradient = ctx.createRadialGradient(
          ball.x,
          ball.y,
          ball.radius * 0.5,
          ball.x,
          ball.y,
          ball.radius
        );
        gradient.addColorStop(0, ball.color);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;

        ctx.filter = "blur(8px)"; // Aumenta il blur per un effetto più soft
        ctx.fill();

        // Gestione del rimbalzo
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
        }

        // Aggiorna la posizione
        ball.x += ball.dx;
        ball.y += ball.dy;
      });

      requestAnimationFrame(draw);
    }

    draw();

    // Gestisce il ridimensionamento della finestra per mantenere il canvas responsive
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {/* Banner per contattare il programmatore */}
        <div
          className={`${
            statusContattaProgrammatore ? "hidden" : "block"
          } relative w-96 mx-auto bg-blue-600 text-center py-8 mt-6 rounded-lg overflow-hidden`}
        >
          {/* Canvas per le palline */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0"
          ></canvas>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white">
              Hai domande? Contatta il programmatore!
            </h3>
            <Link
              onClick={handleClickedOnContattaProgrammatore}
              to="/contattaprogrammatore"
              className="mt-2 inline-block px-6 py-2 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Contatta Stefan Hritcu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
