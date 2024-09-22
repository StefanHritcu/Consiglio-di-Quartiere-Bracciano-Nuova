import Logo from "./../../assets/images/logo/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/slices/mainSlice";
import { CiUser } from "react-icons/ci";
import ItalyIcon from "./../../assets/images/italy.png";
import { FiBox } from "react-icons/fi";
import { TbArrowBack } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

function Header() {
  const isOpenStatus = useSelector((state) => state.forDev.isOpen);
  const dispatch = useDispatch();
  const handleSetToggleMenuStatus = () => {
    dispatch(setIsOpen(!isOpenStatus));
  };

  const isLogged = useSelector((state) => state.forDev.isLogged);
  const numberArticlesSelected = useSelector(
    (state) => state.forDev.articlesSelected
  );

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
      <header className="fixed top-0 w-full z-50 bg-white">
        <div>
          {/* NEW RELEASE ALERT */}
          <animated.section
            ref={cavolo1Ref}
            style={cavolo1Spring}
            className="bg-black text-white text-center py-2"
          >
            <a
              className="inline-block h-8"
              href="#TODO"
              aria-label="New release announcement"
            >
              <p className="border-b border-white hover:text-primary">
                NEW THING LAUNCHED!
              </p>
            </a>
          </animated.section>

          {/* RESPONSIVE HEADER LAYOUT */}
          <section
            className={`flex justify-between items-center transform-transition duration-1000 ${
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
            <Link to="/">
              <img src={Logo} className="w-44" alt="Logo image" />
            </Link>

            {/* USER & SHOPPING CART LINKS */}
            <div className="relative flex justify-center items-center">
              <Link
                to={isLogged ? "/profile" : "/login"}
                aria-label={isLogged ? "Go to profile" : "Go to login"}
              >
                <CiUser className="w-9 h-9 m-3" />
              </Link>

              <Link to="/carousel" aria-label="Shopping cart">
                <FaShoppingBag className="w-9 h-9 m-3" />
              </Link>

              {/* ARTICLES SELECTED BADGE */}
              <div
                className="absolute ml-24 top-2 bg-red-600 rounded-full w-7 h-7 flex items-center justify-center"
                aria-label="Number of selected articles"
              >
                <span className="text-white text-sm">
                  {numberArticlesSelected}
                </span>
              </div>
            </div>
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
              aria-label="Go to Shop"
              to="/shop"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Shop
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/aboutus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to About Us"
              to="/aboutus"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                About Us
              </h2>
            </Link>

            <Link
              className={`group flex justify-between items-center py-2 mx-3 ${
                location.pathname === "/contactus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to Contact Us"
              to="/contactus"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Contact Us
              </h2>
            </Link>
          </nav>
        </div>
        {/* Third header row with additional customer information */}
        <div className="hidden md:block">
          <nav
            className="flex justify-center items-center py-2 bg-gray-200"
            aria-label="Customer information navigation"
          >
            <section className="group" aria-label="Italian Design">
              <Link
                to="italiandesign"
                className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
                aria-label="Learn more about Italian design"
              >
                <img
                  className="w-6 h-auto mr-2"
                  src={ItalyIcon}
                  alt="Icon representing Italian design"
                />
                <span className="text-sm">ITALIAN DESIGN</span>
              </Link>
            </section>

            <section className="group" aria-label="Fast Shipping">
              <Link
                to="shipping"
                className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
                aria-label="Learn more about fast shipping"
              >
                <FiBox className="mr-2" aria-hidden="true" />
                <span className="text-sm">FAST SHIPPING</span>
              </Link>
            </section>

            <section className="group" aria-label="Easy Returns">
              <Link
                to="return"
                className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
                aria-label="Learn more about easy returns"
              >
                <TbArrowBack className="mr-2" aria-hidden="true" />
                <span className="text-sm">EASY RETURNS</span>
              </Link>
            </section>

            <section className="group" aria-label="Customer Reviews">
              <Link
                to="reviews"
                className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
                aria-label="Learn more about customer reviews"
              >
                <FaStar className="mr-2" aria-hidden="true" />
                <span className="text-sm">CUSTOMER REVIEWS</span>
              </Link>
            </section>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
