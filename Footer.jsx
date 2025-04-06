import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo & Name
          <h2 className="text-3xl font-bold tracking-wide text-yellow-400">Monument Scanner</h2> */}

          {/* Navigation Links */}
          {/* <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
            </li>
            <li>
              <a href="#scan" className="hover:text-yellow-400 transition">Scan Monument</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </li>
          </ul> */}
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-400 mt-4 md:mt-0">© 2025 Monument Scanner. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;