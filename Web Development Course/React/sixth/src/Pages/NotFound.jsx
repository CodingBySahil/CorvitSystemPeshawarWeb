import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-gray-700 text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-red-600 rounded-lg font-medium hover:bg-red-700 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
