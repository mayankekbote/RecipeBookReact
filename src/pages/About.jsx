import React from 'react'

const About = () => {
  return (
<div className="min-h-screen flex flex-col items-center pt-28 px-6 text-center text-white">
      <h1 className="text-4xl font-bold mb-3">About RecipeBook</h1>
      <p className="text-gray-300 text-lg max-w-lg leading-relaxed mb-10">
        A React learning project built on Day 11 of a React series, covering
        client-side routing, context-based state management, and form handling
        with <span className="text-pink-300">react-hook-form</span>.
      </p>

      {/* Developer Card */}
      <div className="bg-gray-800 rounded-2xl px-10 py-8 shadow-lg max-w-sm w-full">
        <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          M
        </div>
        <h2 className="text-xl font-semibold mb-1">Mayank Ekbote</h2>
        <p className="text-gray-400 text-sm mb-6">Developer</p>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <a
            href="mailto:mayankekbote12@gmail.com"
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm py-2.5 px-4 rounded-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            mayankekbote12@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mayankekbote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm py-2.5 px-4 rounded-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/mayankekbote
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mayank-ekbote/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm py-2.5 px-4 rounded-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.986V9h3.12v1.561h.045c.435-.823 1.497-1.691 3.08-1.691 3.291 0 3.9 2.167 3.9 4.99v6.592zM5.337 7.433a1.809 1.809 0 1 1 0-3.618 1.809 1.809 0 0 1 0 3.618zm1.563 13.019H3.773V9h3.127v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/mayank-ekbote
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
