import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 text-base text-xl mb-10">
      <NavLink to="/" className={(e) => (e.isActive ? "text-pink-300" : "")}>
        Home
      </NavLink>

      <NavLink
        to="/recipies"
        className={(e) => (e.isActive ? "text-pink-300" : "")}
      >
        Recipies
      </NavLink>

      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-pink-300" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="/create-recipie"
        className={(e) =>
          `bg-pink-600 px-3 py-1 font-semibold rounded-lg ${e.isActive ? "text-pink-200" : ""
          }`
        }
      >
        Create Recipie
      </NavLink>
    </div>
  );
};

export default Navbar;