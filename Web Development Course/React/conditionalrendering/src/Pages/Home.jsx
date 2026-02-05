import { useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function authenticateUser() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-white text-2xl font-bold tracking-wide">MyApp</h1>

          {/* Links */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li className="hover:text-yellow-300 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-300 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-yellow-300 transition cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Auth Button */}
          <button
            onClick={authenticateUser}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
              ${
                isLoggedIn
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {isLoggedIn ? "Welcome to Home Page 🏠" : "Please Sign Up 🔐"}
        </h1>

        <p className="text-gray-600 text-lg max-w-md text-center">
          This is a modern navbar with login state handling using React and
          Tailwind CSS. {isLoggedIn?" You are logged in" : " You are not loggedIn"}
        </p>
      </div>
    </div>
  );
}

export default Home;
