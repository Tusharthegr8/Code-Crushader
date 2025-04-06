import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full p-4 bg-transparent backdrop-blur-md flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">MythLenz</h1>
      <ul className="flex space-x-6 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#scan">Scan Monument</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#scan" className="bg-gray-900 text-white px-4 py-2 rounded">Get Started</a>
    </nav>
  );
};

export default Navbar;