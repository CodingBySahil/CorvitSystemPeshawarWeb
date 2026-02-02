import React from 'react'
import Navbar from '../Components/Navbar'

function Services() {
  document.title = "Baheej Ahmad | Services"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white">
      {/* <Navbar /> */}

      {/* Header */}
      <section className="pt-36 pb-28 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          High-quality solutions designed with clarity, performance, and elegance.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            What We Offer
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-white rounded-3xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                UI / UX Design
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Modern, intuitive interfaces that feel clean, elegant,
                and user-friendly.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Scalable and responsive web interfaces built with
                modern technologies.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Application Architecture
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Well-structured layouts and systems designed to grow
                with your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-100 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            How We Work
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3">Discover</h3>
              <p className="text-gray-600 text-lg">
                Understanding goals, users, and vision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-600 text-lg">
                Crafting clean layouts and strong visual systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Deliver</h3>
              <p className="text-gray-600 text-lg">
                Polished interfaces ready to scale and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-700">
        © 2026 Baheej Ahmad. All rights reserved.
      </footer>
    </div>
  )
}

export default Services
