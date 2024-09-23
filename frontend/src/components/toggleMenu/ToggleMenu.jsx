import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { setIsOpen } from "../../redux/slices/mainSlice";

function ToggleMenu() {
  const isOpenStatus = useSelector((state) => state.forDev.isOpen);
  const dispatch = useDispatch();

  const onClickSelectLinkAndCloseToggleMenu = () => {
    dispatch(setIsOpen(!isOpenStatus));
  };

  const handleClickOutside = (e) => {
    // Se il click non è all'interno dell'aside, chiudere il menu
    if (e.target.closest("aside") === null) {
      dispatch(setIsOpen(false));
    }
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-500 ${
        isOpenStatus ? "bg-black/50" : "bg-transparent pointer-events-none"
      }`}
      aria-hidden={!isOpenStatus}
      onClick={handleClickOutside} // Gestore per chiudere il menu al clic esterno
    >
      <aside
        className={`h-screen w-2/3 z-50 p-8 fixed top-0 left-0 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isOpenStatus ? "translate-x-0 top-36" : "-translate-x-full"
        }`}
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
        aria-label="Main Navigation"
      >
        <nav role="navigation" aria-labelledby="toggle-menu">
          <ul id="toggle-menu" className="space-y-4 mt-6 sm-mt-2 xl:mt-14">
            <li>
              <Link
                className="group flex justify-between items-center py-2 hover:text-violet-600 transition-transform duration-300 hover:scale-105"
                to="/"
                aria-label="Go to Home"
                onClick={onClickSelectLinkAndCloseToggleMenu}
              >
                <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                  Home
                </h2>
                <MdKeyboardArrowRight className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                className="group flex justify-between items-center py-2 hover:text-violet-600 transition-transform duration-300 hover:scale-105"
                to="/articoli"
                aria-label="Go to Articoli"
                onClick={onClickSelectLinkAndCloseToggleMenu}
              >
                <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                  Articoli
                </h2>
                <MdKeyboardArrowRight className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                className="group flex justify-between items-center py-2 hover:text-violet-600 transition-transform duration-300 hover:scale-105"
                to="/chisiamo"
                aria-label="Go to Chi Siamo"
                onClick={onClickSelectLinkAndCloseToggleMenu}
              >
                <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                  Chi Siamo
                </h2>
                <MdKeyboardArrowRight className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                className="group flex justify-between items-center py-2 hover:text-violet-600 transition-transform duration-300 hover:scale-105"
                to="/contatti"
                aria-label="Go to Contatti"
                onClick={onClickSelectLinkAndCloseToggleMenu}
              >
                <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                  Contatti
                </h2>
                <MdKeyboardArrowRight className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default ToggleMenu;
