import React from "react";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  return (
    <div className="flex justify-center gap-4 p-6 bg-gradient-to-r from-emerald-600 to-teal-500 shadow-xl">
      <NavbarButtons
        text="Home"
        classes="bg-white/90 text-emerald-700 hover:bg-emerald-600 hover:text-white"
      />
      <NavbarButtons
        text="About"
        classes="bg-white/90 text-emerald-700 hover:bg-emerald-600 hover:text-white"
      />
      <NavbarButtons
        text="Contact"
        classes="bg-white/90 text-emerald-700 hover:bg-emerald-600 hover:text-white"
      />
      <NavbarButtons
        text="Sign Up"
        classes="bg-black text-white hover:bg-gray-800"
      />
      <NavbarButtons
        text="Login"
        classes="bg-emerald-700 text-white  hover:bg-emerald-800 "
      />
    </div>
  );
}

export default Navbar;
