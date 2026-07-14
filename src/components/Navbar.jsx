import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-red-700 md:text-4xl">
          Nagrecha Hospital
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 font-medium md:flex">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#doctors" className="hover:text-blue-600">Doctors</a></li>
          <li><a href="#facilities" className="hover:text-blue-600">Facilities</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:block">
          Book Appointment
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-4 bg-white px-6 pb-6 md:hidden">

          <a href="#home" onClick={() => setMenuOpen(false)} className="block">
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)} className="block">
            About
          </a>

          <a href="#doctors" onClick={() => setMenuOpen(false)} className="block">
            Doctors
          </a>

          <a href="#facilities" onClick={() => setMenuOpen(false)} className="block">
            Facilities
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)} className="block">
            Contact
          </a>

          <button className="w-full rounded-lg bg-blue-600 py-3 text-white">
            Book Appointment
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;