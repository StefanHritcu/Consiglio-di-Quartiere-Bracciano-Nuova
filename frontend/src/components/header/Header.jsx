import Logo from "./../../assets/images/braccianoNuovaLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/slices/mainSlice";
import { FiBox } from "react-icons/fi";
import { TbArrowBack } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-primary">
        <div>
          {/* NEW RELEASE ALERT */}
          <animated.section
            ref={cavolo1Ref}
            style={cavolo1Spring}
            className="bg-white text-black font-semibold text-center py-2"
          >
            <a
              className="inline-block h-8"
              href="#TODO"
              aria-label="New release announcement"
            >
              <p className="border-b border-black hover:text-primary">
                NON PERDERTI L&apos;ULTIMO ARTICOLO!
              </p>
            </a>
          </animated.section>

          {/* RESPONSIVE HEADER LAYOUT */}
          <section
            className={`flex justify-start items-center transform-transition duration-1000 ${
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
                  <IoClose className="w-10 h-10 m-1" />
                ) : (
                  <RxHamburgerMenu className="w-10 h-10 m-1" />
                )}
              </button>
            </nav>

            {/* LOGO */}
            <Link to="/" className="flex justify-center ml-6 items-center">
              <img src={Logo} className="w-20 h-auto py-2" alt="Logo image" />
              <h1 className="text-white text-3xl ml-4">
                Bracciano Nuova
                <span className="hidden lg:block text-xl">
                  - Consiglio di Quartiere
                </span>
              </h1>
            </Link>

            {/* SOCIAL LINKS TABLET AND LAPTOP */}
            <nav className="hidden md:block">
              <div className="flex text-white ml-12">
                <p>Seguici su</p>
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
          </section>
        </div>
        <hr />
        {/* SECOND HEADER ROW OF VARIOUS LINKS */}
        <div className="hidden xl:block py-2 mb-2">
          <nav className="flex justify-center items-center">
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/" ? "border-b-2 border-yellow-500" : ""
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
                location.pathname === "/shop"
                  ? "border-b-2 border-yellow-500"
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
                location.pathname === "/aboutus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to Chi Siamo"
              to="/chisiamo"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Chi Siamo
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-3 ${
                location.pathname === "/contactus"
                  ? "border-b-2 border-yellow-500"
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
        <nav className="md:hidden">
          <div className="flex text-white ml-12">
            <p>Seguici su</p>
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
