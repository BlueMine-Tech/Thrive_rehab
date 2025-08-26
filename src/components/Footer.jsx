import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "Book an Appointment", path: "/contact" }
  ];
 

  const services = [
    { name: "DETAILED EVALUATION", path: "/services" },
    { name: "SPEECH THERAPY", path: "/services" },
    { name: " OCCUPATIONAL THERAPY", path: "/services" },
    { name: " SPECIAL EDUCATION", path: "/services" },
    {name:"HEARING AID AND TRIAL AND DISPENSING", path:"/services"},
    { name: " AURAL REHABILITION", path: "/services" },
    { name: "  PSYCHOLOGICAL COUNSELLING", path: "/services" },
    { name: " ONLINE THERAPY[TELE-THERAPY] ", path: "/services" },
    { name: "  HOME VISITS", path: "/services" },
   

  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, text: "8248058950" },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, text: "thrivetherapyandrehab@gmail.com" },
    { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, text: "7A, ground floor, P Block, 18th Street, 6th avenue Anna Nagar, Chennai-600040" },
    { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Mon-Sat: 9AM-8PM • Sat: 9AM to 5 PM • Sun: By appointment" }
  ];

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 text-sm">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    {/* About Section */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-[#203A78] mb-3 sm:mb-4">
        <span className="font-extrabold">Thrive</span> Therapy
      </h3>
      <p className="text-gray-600 mb-3">
        Helping you thrive through personalized therapy services.
      </p>
      <div className="flex gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#203A78] text-white p-2 rounded-full hover:bg-[#162950] transition"
        >
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a
          href="https://www.instagram.com/thrivetherapyandrehab?utm_source=qr&igsh=YmZwcGs5ZjEwbGtl"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#203A78] text-white p-2 rounded-full hover:bg-[#162950] transition"
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-[#203A78] mb-3">Quick Links</h3>
      <ul className="space-y-1 sm:space-y-2">
        {quickLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-gray-600 hover:text-[#203A78] transition duration-300 inline-block"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-[#203A78] mb-3">Our Services</h3>
      <ul className="space-y-1 sm:space-y-2">
        {services.map((service) => (
          <li key={service.name}>
            <Link
              to={service.path}
              className="text-gray-600 hover:text-[#203A78] transition duration-300 inline-block"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-[#203A78] mb-3">Contact Us</h3>
      <ul className="space-y-3 sm:space-y-4">
        {contactInfo.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="text-[#203A78]">{item.icon}</div>
            <span className="text-gray-600 text-sm sm:text-base">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="bg-gray-100 py-3 sm:py-4">
    <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-xs sm:text-sm">
      <p>© {new Date().getFullYear()} Thrive Therapy and Rehab. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 flex-wrap">
        <Link to="/privacy-policy" className="hover:text-[#203A78]">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-[#203A78]">Terms of Service</Link>
      </div>
    </div>
  </div>
</footer>

  );
}
