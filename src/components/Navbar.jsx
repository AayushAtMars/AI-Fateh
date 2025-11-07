import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaUserCircle, FaUsersCog } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // "admin", "student", or "coordinator"

  // Mock: pretend user logged in (frontend demo only)
  useEffect(() => {
    // Example: Simulate a logged-in user (you can remove/change this)
    setUserRole("student");
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/about", label: "ABOUT US" },
    { to: "/howitStarted", label: "HOW IT STARTED" },
    { to: "/events", label: "EVENTS" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
        }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-orange-500"
                  : "text-gray-800 hover:text-orange-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Coordinator Icon */}
          {userRole === "coordinator" && (
            <NavLink
              to="/coordinator/dashboard"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaUsersCog size={24} className="text-[#002277]" />
            </NavLink>
          )}

          {/* Admin/Student Icon */}
          {userRole && (
            <NavLink
              to={
                userRole === "admin"
                  ? "/admin/dashboard"
                  : "/student-profile"
              }
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaUserCircle size={28} className="text-[#002277]" />
            </NavLink>
          )}

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX size={24} className="text-gray-700" />
            ) : (
              <HiOutlineMenuAlt3 size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
