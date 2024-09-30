import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  //FUNZIONE PER CONTROLLARE LA VISIBILITà DEL PULSANTE
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //FUNZONE PER LO SCROLLIUNG FLUIDO VERSO L ALTO
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed z-50 bottom-6 right-6 text-white bg-blue-700 hover:bg-primary hover:text-blue-700 hover:scale-125 active:scale-110 transition-transform duration-300"
        >
          <FaArrowUp className="w-14 h-14 p-2" />
        </div>
      )}
    </>
  );
}

export default BackToTop;
