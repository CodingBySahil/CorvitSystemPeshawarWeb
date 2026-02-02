import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function About() {
  document.title = "Baheej Ahmad | About"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white">
      {/* <Navbar /> */}

      {/* Header */}
      <section className="pt-36 pb-28 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          Discover the vision, values, and design philosophy behind this project.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We focus on creating clean, modern interfaces that feel intuitive
              and visually appealing. Every layout is crafted with attention to
              spacing, contrast, and usability.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is to build applications that not only work well but also
              feel great to use.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl p-12 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
            <h3 className="text-2xl font-semibold mb-4">
              Design Principles
            </h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>• Clarity and simplicity</li>
              <li>• Consistent visual hierarchy</li>
              <li>• User-focused layouts</li>
              <li>• Scalable design systems</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-slate-100 text-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe great UI is invisible — it guides users naturally without
            friction. By combining thoughtful design and modern aesthetics, we
            create experiences that feel both powerful and effortless.
          </p>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default About
