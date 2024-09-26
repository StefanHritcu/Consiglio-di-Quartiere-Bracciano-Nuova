import Logo from "./../../assets/images/braccianoNuovaLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/slices/mainSlice";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Header() {
  const isOpenStatus = useSelector((state) => state.forDev.isOpen);
  const dispatch = useDispatch();
  const handleSetToggleMenuStatus = () => {
    dispatch(setIsOpen(!isOpenStatus));
  };

  const location = useLocation();
  const [scrollingDown, setScrollingDown] = useState(false);

  const cavolo1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 700px)");

    const handleResize = () => setIsWideScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const cavolo1Spring = useSpring({
    height: scrollingDown ? "0px" : "40px",
    opacity: scrollingDown ? 0 : 1,
    config: { duration: 200 },
  });

  const [isButtonFirstHeaderClicked, setIsButtonFirstHeaderClicked] =
    useState(false);
  const handleCloseFirstHeader = () => {
    setIsButtonFirstHeaderClicked(!isButtonFirstHeaderClicked);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-primary">
        <div>
          {/* NEW RELEASE ALERT */}
          <animated.section
            ref={cavolo1Ref}
            style={cavolo1Spring}
            className={
              isButtonFirstHeaderClicked
                ? "invisible"
                : "relative bg-coloreScuro text-white font-semibold text-center h-auto py-2"
            }
          >
            <a
              className="inline-block"
              href="#TODO"
              aria-label="New release announcement"
            >
              <p className="border-b border-white text-xs extraSmall:text-sm hover:border-blue-800 hover:text-primary active:text-secondary active:border-secondary transition-transform duration-3000 hover:scale-105">
                NON PERDERTI L&apos;ULTIMO ARTICOLO!
              </p>
            </a>
            <button
              onClick={handleCloseFirstHeader}
              className="absolute right-4 top-1.5 text-3xl"
            >
              <AiOutlineCloseCircle />
            </button>
          </animated.section>

          {/* RESPONSIVE HEADER LAYOUT */}
          <section
            className={`flex justify-start items-center xl:justify-around transform-transition duration-1000 ${
              scrollingDown ? "mx-6" : "mx-2"
            } ${scrollingDown ? "xl:mx-26" : "xl:mx-20"}`}
          >
            {/* HAMBURGER BTN */}
            <nav className="xl:hidden" aria-label="Main navigation">
              <button
                onClick={handleSetToggleMenuStatus}
                aria-label={isOpenStatus ? "Close menu" : "Open menu"}
              >
                {isOpenStatus ? (
                  <IoClose className="w-10 h-10 m-1 text-white" />
                ) : (
                  <RxHamburgerMenu className="w-10 h-10 m-1 text-white" />
                )}
              </button>
            </nav>

            {/* LOGO */}
            <Link to="/" className="flex justify-center ml-6 items-center">
              <img src={Logo} className="w-20 h-auto py-2" alt="Logo image" />
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl ml-4">
                Bracciano Nuova
                <span className="hidden lg:block text-xl">
                  - Consiglio di Quartiere
                </span>
              </h1>
            </Link>

            {/* SOCIAL LINKS TABLET AND LAPTOP */}
            <nav
              className="hidden md:block mb-6"
              aria-label="Social Media Links"
            >
              <div className="flex flex-col justify-center items-center text-white ml-6 md:ml-20">
                <p className="py-2 text-lg font-semibold">Seguici su</p>
                <div className="flex justify-between items-center ml-2">
                  <a
                    href="https://www.facebook.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <CiInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <CiLinkedin />
                  </a>
                  <a
                    href="https://www.telegram.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://www.whatsapp.com"
                    className="bg-primary text-white text-2xl mx-2 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </nav>
          </section>
        </div>
        <hr />
        {/* SECOND HEADER ROW OF VARIOUS LINKS */}
        <div className="hidden xl:block mb-2">
          <nav className="flex justify-center text-white items-center">
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/" ? "border-b-2 border-secondary" : ""
              }`}
              aria-label="Go to Homepage"
              to="/"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Home
              </h2>
            </Link>
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/articoli"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              aria-label="Go to Articoli"
              to="/articoli"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Articoli
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/territorio"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              aria-label="Go to Territorio"
              to="/territorio"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Territorio
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/servizi"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              aria-label="Go to Servizi"
              to="/servizi"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Servizi
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/consiglio"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              aria-label="Go to Il Consiglio"
              to="/consiglio"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Il Consiglio
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-3 ${
                location.pathname === "/contactus"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              aria-label="Go to Contatti"
              to="/contatti"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Contatti
              </h2>
            </Link>
          </nav>
        </div>
        {/* SOCIAL LINKS ONLY FOR MOBILE */}
        <nav className="md:hidden py-2">
          <div className="flex items-center text-white ml-2 extraSmall:ml-6 sm:ml-8">
            <p className="flex  text-hs extraSmall:text-lg sm:text-xl">
              Seguici <span className="hidden extraSmall:block mx-1">su</span>
            </p>
            <div className="flex justify-between items-center ml-4">
              <a
                href="www.facebook.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.twitter.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <FaXTwitter />
              </a>
              <a
                href="www.instagram.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <CiInstagram />
              </a>
              <a
                href="www.linkedin.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <CiLinkedin />
              </a>
              <a
                href="www.telegram.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <FaTelegram />
              </a>
              <a
                href="www.whatsapp.com"
                className="bg-primary test-white text-2xl mx-2"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
