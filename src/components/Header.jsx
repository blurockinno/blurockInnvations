import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const location = useLocation();

  return (
    <>
      <header
        className={`plus-jakarta-sans w-full sticky ${
          location.pathname === "/profile"
            ? "text-[#141415] bg-white"
            : "text-white bg-[#141415]"
        } p-7 absolute top-0  z-50`}
      >
        <nav className="container mx-auto flex justify-between items-center px-12 opacity-100 ">
          <div className="text-xl font-bold cursor-pointer">
            Blurock Innovations
          </div>
          <div className="space-x-12 flex text-sm font-semibold ">
            <NavLink to="/" className="hover:text-[#146EF5] focus:text-[#146ef5]">
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
            <NavLink to="/solution" className="hover:text-[#146EF5] focus:text-[#146ef5]">
              Solution
            </NavLink>
            
            <NavLink to="/about" className="hover:text-[#146EF5] focus:text-[#146ef5]">
              About us
            </NavLink>
            <NavLink to="/career" className="hover:text-[#146EF5] focus:text-[#146ef5]">
              Career
            </NavLink>
            <NavLink to="/solution" className="hover:text-[#146EF5] focus:text-[#146ef5]">
              Help
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
              <NavLink to="/sign-in" className="hover:text-[#146EF5] focus:text-[#146ef5]">
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
