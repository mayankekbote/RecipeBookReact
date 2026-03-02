import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-6">

      <div className="max-w-4xl w-full text-center">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 bg-pink-600/20 text-pink-400 text-sm rounded-full border border-pink-500/30">
          Your Personal Recipe Vault
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          Cook. Create. <span className="text-pink-500">Inspire.</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Organize your favourite meals, experiment with new flavors,
          and build your own digital cookbook with powerful editing
          and category management.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">

          <Link
            to="/recipies"
            className="bg-pink-600 hover:bg-pink-500 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg shadow-pink-600/30 transition-all duration-300 hover:scale-105"
          >
            Explore Recipes
          </Link>

          <Link
            to="/create-recipie"
            className="bg-gray-800 border border-gray-600 hover:border-pink-500 hover:text-pink-400 px-8 py-3 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105"
          >
            Create New Recipe
          </Link>

        </div>

        {/* Footer Line */}
        <div className="mt-20 text-gray-500 text-sm tracking-wide">
          Built with React • Tailwind • Context API
        </div>

      </div>

    </div>
  );
};

export default Home;