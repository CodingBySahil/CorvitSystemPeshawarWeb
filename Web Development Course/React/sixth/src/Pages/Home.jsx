import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
  document.title = "Baheej Ahmad | Home"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white">
      {/* <Navbar /> */}

      {/* HERO */}
      <section className="pt-36 pb-32 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Build Something Beautiful ✨
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          A modern React experience focused on clean design, smooth UX, and
          scalable architecture.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Why This UI Feels Premium
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-white rounded-3xl p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Elegant Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Minimal, clean, and visually balanced layouts that feel
                professional.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Smooth Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thoughtful spacing, typography, and flow for effortless use.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Scalable Layout
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designed to grow with more pages, sections, and features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO / ABOUT */}
      <section className="py-32 bg-slate-100 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Crafted for Modern Applications
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This interface is built with strong UI principles — hierarchy,
            contrast, balance, and clarity — ensuring your app feels intuitive
            and polished from the first impression.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-slate-300 text-lg mb-10">
          Begin building experiences that users love.
        </p>

        <button className="bg-gradient-to-r from-sky-400 to-indigo-500 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition">
          Get Started
        </button>
      </section>

      <Footer/>
    </div>
  )
}

export default Home
