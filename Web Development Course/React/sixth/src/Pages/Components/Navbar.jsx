import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
