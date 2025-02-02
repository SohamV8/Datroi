import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a1f44] to-[#004aad] bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "CSR", "Blogs", "Education", "News", "Business"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-cyan-300 transition duration-300"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-[#0a1f44] transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <nav className="flex flex-col items-center py-4">
          {/* Close Button */}
          <button
            className="self-end p-4 text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Menu Items */}
          {["Home", "CSR", "Blogs", "Education", "News", "Business"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-white text-lg font-medium py-2 w-full text-center hover:bg-[#004aad] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;