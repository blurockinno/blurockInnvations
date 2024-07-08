import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const location = useLocation();


  return (
    <>
      <div
        className={`w-full p-11 absolute top-0  z-50 ${
          location.pathname === "/profile" ? "bg-white" : "bg-black"
        }  opacity-80 shadow-sm  backdrop-blur-sm`}
      ></div>
      <header className={`w-full  ${
          location.pathname === "/profile" ? "text-black" : "text-white"
        } p-7 absolute top-0  z-50`}>
        <nav className="container mx-auto flex justify-between items-center px-12 opacity-100 ">
          <div className="text-xl font-bold cursor-pointer">
            Blurock Innovations
          </div>
          <div className="space-x-12 flex text-sm font-semibold ">
            <NavLink
              to="/"
              className="hover:underline"
              activeclassname="underline"
            >
              Home
            </NavLink>
            {/* {currentUser && (
              <NavLink
                to="/our-product"
                className="hover:underline"
                activeClassName="underline"
              >
                Our Product
              </NavLink>
            )} */}
            <NavLink
              to="/service"
              className="hover:underline"
              activeclassname="underline"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className="hover:underline"
              activeclassname="underline"
            >
              About us
            </NavLink>
            <NavLink
              to="/career"
              className="hover:underline"
              activeclassname="underline"
            >
              Career
            </NavLink>
            {currentUser ? (
              <NavLink
                to="/profile"
                className="hover:underline"
                activeclassname="underline"
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
                className="hover:underline"
                activeclassname="underline"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
