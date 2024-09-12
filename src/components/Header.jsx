import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/vite.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setCurrentPage(location?.pathname);
  }, [location]);

  return (
    <>
      <header
        className={`plus-jakarta-sans w-full sticky ${
          location.pathname === "/profile"
            ? "text-[#141415] bg-white"
            : "text-white bg-[#141415]"
        } p-7 absolute top-0 z-50`}
      >
        <nav className="container mx-auto flex justify-between items-center px-3 md:px-12 opacity-100 w-full ">
          <Link
            to={"/home"}
            className="text-xl font-bold cursor-pointer flex gap-5"
          >
            <img src={logo} alt="Blurock Ionic " className="h-10 w-28" />
            <p className="hidden md:block">
              <span className="text-[8px] relative top-6 -left-20">
                Blurock Wealth
              </span>
              <br />
            </p>
          </Link>
          <div className="space-x-12 hidden md:flex text-md font-semibold md:items-center">
            <NavLink
              to="/"
              className={`hover:text-[#146EF5] ${
                currentPage === "/" || currentPage === "/home"
                  ? "text-[#146ef5]"
                  : null
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/solution"
              className={`hover:text-[#146EF5] ${
                currentPage === "/solution" ? "text-[#146ef5]" : null
              }`}
            >
              Solution
            </NavLink>
            <NavLink
              to="/service"
              className={`hover:text-[#146EF5] ${
                currentPage === "/service" ? "text-[#146ef5]" : null
              }`}
            >
              Services
            </NavLink>
            <NavLink
              to="/help"
              className={`hover:text-[#146EF5] ${
                currentPage === "/help" ? "text-[#146ef5]" : null
              }`}
            >
              Help
            </NavLink>
            <NavLink
              to="/about"
              className={`hover:text-[#146EF5] ${
                currentPage === "/about" ? "text-[#146ef5]" : null
              }`}
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className={`hover:text-[#146EF5] ${
                currentPage === "/contact" ? "text-[#146ef5]" : null
              }`}
            >
              Contact us
            </NavLink>

            {/* External Link for Events */}
            <a
              href="https://jayy.mmm.page/events" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#146EF5]"
            >
              Events
            </a>

            {currentUser ? (
              <NavLink to="/profile" className="hover:underline">
                <img
                  src={currentUser.profilePicture}
                  alt="profile picture"
                  className="rounded-full h-7 w-7 object-cover border-black shadow-sm"
                />
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className="bg-[#146EF5] md:px-3 md:py-1 md:rounded-md hover:bg-blue-700"
              >
                Sign in
              </NavLink>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleToggleMenu}
          ></div>
        )}
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 w-60 h-full    z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out ${
            location.pathname === "/profile"
              ? "text-[#141415] bg-white"
              : "text-white bg-[#141415]"
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4 p-10">
            <NavLink
              to="/"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
              onClick={handleToggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/solution"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
              onClick={handleToggleMenu}
            >
              Solution
            </NavLink>
            <NavLink
              to="/help"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
              onClick={handleToggleMenu}
            >
              Help
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
              onClick={handleToggleMenu}
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
              onClick={handleToggleMenu}
            >
              Contact
            </NavLink>

            {/* External Link for Events*/}
            <a
              href="https://jayy.mmm.page/events" // replace with your external link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#146EF5]"
              onClick={handleToggleMenu}
            >
              Events
            </a>

            {currentUser ? (
              <NavLink to="/profile" onClick={handleToggleMenu}>
                <div className="flex gap-4">
                  <img
                    src={currentUser?.profilePicture}
                    alt="profile picture"
                    className="rounded-full h-7 w-7 object-cover border-black shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-md">{currentUser?.fullName}</span>
                    <span className="text-xs ">{currentUser?.companyName}</span>
                  </div>
                </div>
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className="hover:text-[#146EF5] focus:text-[#146ef5]"
                onClick={handleToggleMenu}
              >
                Sign in
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
