import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
  document.title = "Baheej Ahmad | Contact"

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700">
      {/* <Navbar /> */}

      <div className="flex items-center justify-center pt-32">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Get in touch — we’d love to hear from you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
