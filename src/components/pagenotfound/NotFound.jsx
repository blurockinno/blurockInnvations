// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import path from "/assets/path.svg";

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#141415] plus-jakarta-sans"
      style={{
        backgroundImage: `url(${path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center start",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-100 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#146ef5] text-white rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
