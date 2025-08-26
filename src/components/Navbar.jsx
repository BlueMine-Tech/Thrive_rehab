import { useState } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-[#203A78] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
<h1 className="text-3xl font-medium text-blue-100 hover:text-blue-300 transition duration-300 ease-in-out">
  <span className="font-bold">THRIVE</span> Therapy and Rehab
</h1>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="group">
              <Link
                to={link.path}
                className="transition-all duration-300 transform group-hover:scale-105 hover:text-[#D9F0FF]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Appointment Button (Hidden on mobile) */}
        <Link to="/contact">
          <button className="bg-[#D9F0FF] text-[#203A78] py-2 px-6 rounded-lg hover:bg-[#201256] hover:text-white transition-all duration-300 ease-in-out hidden md:block">
            Book an Appointment
          </button>
        </Link>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Facebook
              className="w-6 h-6 hover:text-[#D9F0FF] transition duration-300 group-hover:scale-110 group-hover:text-[#D9F0FF]"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Instagram
              className="w-6 h-6 hover:text-[#D9F0FF] transition duration-300 group-hover:scale-110 group-hover:text-[#D9F0FF]"
            />
          </a>
        </div>

        {/* Mobile hamburger icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#201256] text-white px-4 py-4 rounded">
          {navLinks.map((link) => (
            <li key={link.name} className="group">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#D9F0FF] transition duration-300 group-hover:underline group-hover:underline-offset-4"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile Social Media Icons */}
      {menuOpen && (
        <div className="md:hidden flex gap-6 justify-center mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Facebook
              className="w-6 h-6 text-white hover:text-[#D9F0FF] transition duration-300 group-hover:scale-110"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Instagram
              className="w-6 h-6 text-white hover:text-[#D9F0FF] transition duration-300 group-hover:scale-110"
            />
          </a>
        </div>
      )}
    </nav>
  );
}
