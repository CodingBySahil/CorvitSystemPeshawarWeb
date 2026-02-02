import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-500 to-teal-500 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-6">

        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide"
        >
          Baheej
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-white font-medium">
          <Link className="hover:text-black transition" to="/">Home</Link>
          <Link className="hover:text-black transition" to="/about">About</Link>
          <Link className="hover:text-black transition" to="/services">Services</Link>
          <Link className="hover:text-black transition" to="/projects">Projects</Link>
          <Link className="hover:text-black transition" to="/blog">Blog</Link>
          <Link className="hover:text-black transition" to="/contact">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/login"
          className="bg-white text-emerald-600 px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition"
        >
          Login
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
