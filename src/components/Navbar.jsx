import React from "react";

function Navbar() {
  return (
    <nav className="flex fixed top-0 w-full items-center justify-center bg-mybrown mx-auto transition-transform ease-in-out z-50 ">
      <div className="flex items-center justify-between max-w-7xl w-full backdrop-blur-lg bg-opacity-80 py-5 px-4">
        <h2 className="text-3xl text-olive">
          <a href="/">Chin Mae</a>
        </h2>

        <ul className="flex space-x-5">
          <a href="#home">
            <li className="text-olive hover:text-beige">Home</li>
          </a>
          <a href="#about">
            <li className="text-olive hover:text-beige">About</li>
          </a>
          <a href="#experience">
            <li className="text-olive hover:text-beige">Experience</li>
          </a>
          <a href="#contact">
            <li className="text-olive hover:text-beige">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
