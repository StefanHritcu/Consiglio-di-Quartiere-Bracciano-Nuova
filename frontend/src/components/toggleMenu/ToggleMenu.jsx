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

  return (
    <aside
      className="h-2/3 w-2/3 z-30 p-8 fixed top-32 left-0 bg-white"
      style={{
        transform: isOpenStatus ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <nav>
        <ul>
          <li>
            <Link
              className="group flex justify-between items-center py-2"
              to=""
              aria-label="Go to Home"
              onClick={onClickSelectLinkAndCloseToggleMenu}
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Home
              </h2>
              <MdKeyboardArrowRight className="w-6 h-6" />
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="group flex justify-between items-center py-2"
              to="/shop"
              aria-label="Go to Shop"
              onClick={onClickSelectLinkAndCloseToggleMenu}
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Shop
              </h2>
              <MdKeyboardArrowRight className="w-6 h-6" />
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="group flex justify-between items-center py-2"
              to="/aboutus"
              aria-label="Go to About Us"
              onClick={onClickSelectLinkAndCloseToggleMenu}
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                About Us
              </h2>
              <MdKeyboardArrowRight className="w-6 h-6" />
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="group flex justify-between items-center py-2"
              to="/contactus"
              aria-label="Go to Contact Us"
              onClick={onClickSelectLinkAndCloseToggleMenu}
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Contact Us
              </h2>
              <MdKeyboardArrowRight className="w-6 h-6" />
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="group flex justify-between mt-22 items-center py-2"
              to="/login"
              aria-label="Go to Log In"
              onClick={onClickSelectLinkAndCloseToggleMenu}
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Log In
              </h2>
              <MdKeyboardArrowRight className="w-6 h-6" />
            </Link>
          </li>
          <hr />
        </ul>
      </nav>
    </aside>
  );
}

export default ToggleMenu;
