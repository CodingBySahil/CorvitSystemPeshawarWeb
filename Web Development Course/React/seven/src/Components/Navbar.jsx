import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-800 p-4">
      <Link to='/' className="text-white mx-2 hover:text-gray-300">Home</Link>
      <Link to='/about' className="text-white mx-2 hover:text-gray-300">About</Link>
      <Link to='/all-products' className="text-white mx-2 hover:text-gray-300">Products</Link>
    </div>
  )
}

export default Navbar
