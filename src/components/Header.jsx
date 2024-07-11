import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <div className="text-xl font-bold cursor-pointer">
            Blurock Innovations
          </div>
          <div className="space-x-12 hidden md:flex text-sm font-semibold">
            <NavLink
              to="/"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
            >
              Home
            </NavLink>
            <NavLink
              to="/solution"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
            >
              Solution
            </NavLink>
            <NavLink
              to="/help"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
            >
              Help
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#146EF5] focus:text-[#146ef5]"
            >
              Contact
            </NavLink>

            {currentUser ? (
              <NavLink
                to="/profile"
                className="hover:underline"
                activeClassName="underline"
              >
                <img
                  src={currentUser.profilePicture}
                  alt="profile picture"
                  className="rounded-full h-7 w-7 object-cover border-black shadow-sm"
                />
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className="hover:text-[#146EF5] focus:text-[#146ef5]"
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
            {currentUser ? (
              <NavLink
                to="/profile"
                className="hover:underline "
                activeClassName="underline"
                onClick={handleToggleMenu}
              >
                <div>
                  <img
                    src={currentUser?.profilePicture}
                    alt="profile picture"
                    className="rounded-full h-7 w-7 object-cover border-black shadow-sm"
                  />
                  <div>
                     <span>{currentUser?.fullName}</span>
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
