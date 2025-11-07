import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../../assets/super-60logo.png";
import ShareButton from "../Button/ShareButton";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide back-to-top button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Vertical Social Icons */}
      <div className="fixed z-40 flex-col hidden space-y-4 text-xl text-gray-900 md:flex top-1/3 left-5 dark:text-gray-400">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:text-orange-500 hover:-translate-y-1"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:text-orange-500 hover:-translate-y-1"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:text-orange-500 hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:text-orange-500 hover:-translate-y-1"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Main Footer */}
      <footer className="bg-white dark:bg-gray-900 text-black dark:text-gray-300 mt-32 shadow-[0_-2px_20px_rgba(0,0,0,0.05)]">
        <div className="grid items-center grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Super60 Logo" className="h-16 mb-4 cursor-target" />
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Super60 is a merit-based program that empowers top students
              through technical training, academic excellence, discipline, and
              real-world exposure guided by expert mentorship.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-lg font-semibold relative inline-block after:block after:w-12 after:h-[2px] after:bg-orange-500 after:mt-1">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold relative inline-block after:block after:w-16 after:h-[2px] after:bg-orange-500 after:mt-1">
              Community
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/community"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/batches"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Batches
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  How It Started
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Member Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold relative inline-block after:block after:w-20 after:h-[2px] after:bg-orange-500 after:mt-1">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/training-model"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Training Model
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="block transition-all duration-200 hover:text-orange-500 hover:pl-1"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Bottom Bar */}
        {/* <div className="flex flex-col items-center justify-between px-6 py-4 mx-auto max-w-7xl sm:flex-row">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 sm:text-left">
            © {new Date().getFullYear()} Super60. All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 text-xl sm:mt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all duration-200 transform hover:text-orange-500 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-all duration-200 transform hover:text-orange-500 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-200 transform hover:text-orange-500 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-all duration-200 transform hover:text-orange-500 hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </div> */}

        <div className="flex flex-col items-center justify-between px-6 py-4 mx-auto max-w-7xl sm:flex-row ">
  <p className="mb-8 text-xs text-center text-gray-500 dark:text-gray-400 sm:text-left cursor-target">
    © {new Date().getFullYear()} Super60. All rights reserved.
  </p>

  <ShareButton className="hidden md:flex"  label="Visit" />
</div>



        
      </footer>

      

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white transition-all duration-300 bg-orange-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-orange-600 cursor-target"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      
    </>
  );
};

export default Footer;
