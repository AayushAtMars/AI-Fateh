import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaUserCircle,FaUsersCog } from "react-icons/fa";
import Sidebar from "./Sidebar";
import logo from "../../assets/super-60logo.png";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import BACKEND_URL from "../../utils/axiosConfig";

const Navbar = () => {
  // === Configurations ===
  const config = {
    mobile: {
      sideMarginTop: 12,
      sideMarginScrolled: 20,
      paddingYDefault: 10,
      paddingYScrolled: 6,
      borderRadiusTop: 8,
      borderRadiusScrolled: 10,
      logoHeightTop: 30,
      logoHeightScrolled: 25,
      // blurAmount: 10,
      bgOpacityDefault: 0.42,
      bgOpacityScrolled: 0.6,
      shadowDefault: "0 4px 24px rgba(0, 0, 0, 0.06)",
      shadowScrolled: "0 8px 40px rgba(0, 0, 0, 0.12)",
    },
    tablet: {
      sideMarginTop: 24,
      sideMarginScrolled: 60,
      paddingYDefault: 14,
      paddingYScrolled: 8,
      borderRadiusTop: 10,
      borderRadiusScrolled: 10,
      logoHeightTop: 36,
      logoHeightScrolled: 28,
      // blurAmount: 12,
      bgOpacityDefault: 0.45,
      bgOpacityScrolled: 0.65,
      shadowDefault: "0 6px 26px rgba(0, 0, 0, 0.07)",
      shadowScrolled: "0 10px 45px rgba(0, 0, 0, 0.14)",
    },
    desktop: {
      sideMarginTop: 20,
      sideMarginScrolled: 140,
      paddingYDefault: 20,
      paddingYScrolled: 12,
      borderRadiusTop: 14,
      borderRadiusScrolled: 10,
      logoHeightTop: 42,
      logoHeightScrolled: 36,
      // blurAmount: 14,
      bgOpacityDefault: 0.5,
      bgOpacityScrolled: 0.7,
      shadowDefault: "0 8px 30px rgba(0, 0, 0, 0.09)",
      shadowScrolled: "0 14px 50px rgba(0, 0, 0, 0.17)",
    },
  };

  // === State ===
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isAuthenticated, user ,isAdmin} = useContext(AuthContext);
  const [userData,setUserData] = useState(null);

  // Resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try{
      const res = await axios.get(`${BACKEND_URL}/student/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          withCredentials: true,
        });
        setUserData(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(!isAdmin && isAuthenticated)
    fetchData();
  },[isAuthenticated]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".mobile-menu-container") &&
        !e.target.closest("#mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Get current config based on viewport width
  const getCurrentConfig = () => {
    if (windowWidth < 640) return config.mobile;
    if (windowWidth < 1024) return config.tablet;
    return config.desktop;
  };
  const currentConfig = getCurrentConfig();

  const navLinks = [
    { to: "/about", label: "ABOUT US" },
    { to: "/howitStarted", label: "HOW IT STARTED" },
    { to: "/events", label: "EVENTS" },
  ];

  // Function to open sidebar from mobile menu instead of modal dropdown
  const openSidebarFromMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          top: `${currentConfig.sideMarginTop}px`,
          left: isScrolled
            ? `${currentConfig.sideMarginScrolled}px`
            : `${currentConfig.sideMarginTop}px`,
          right: isScrolled
            ? `${currentConfig.sideMarginScrolled}px`
            : `${currentConfig.sideMarginTop}px`,
          borderRadius: isScrolled
            ? `${currentConfig.borderRadiusScrolled}px`
            : `${currentConfig.borderRadiusTop}px`,
          paddingTop: `${
            isScrolled
              ? currentConfig.paddingYScrolled
              : currentConfig.paddingYDefault
          }px`,
          paddingBottom: `${
            isScrolled
              ? currentConfig.paddingYScrolled
              : currentConfig.paddingYDefault
          }px`,
          backgroundColor: "white",
          // backgroundColor: `rgba(000,000,000 ${
          //   isScrolled ? currentConfig.bgOpacityScrolled : currentConfig.bgOpacityDefault
          // })`,
          backdropFilter: `blur(${currentConfig.blurAmount}px)`,
          boxShadow: isScrolled
            ? currentConfig.shadowScrolled
            : currentConfig.shadowDefault,
          transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "fixed",
          zIndex: 40,
          maxWidth: "calc(100vw - 2 * var(--side-margin))",
        }}
        className="flex items-center justify-between px-6 mx-auto max-w-7xl"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-300 cursor-pointer hover:scale-105"
          aria-label="Homepage"
          style={{
            height: isScrolled
              ? `${currentConfig.logoHeightScrolled}px`
              : `${currentConfig.logoHeightTop}px`,
            paddingLeft: 10,
            paddingRight: 10,
            transition:
              "height 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="object-contain w-auto h-full"
            draggable="false"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="items-center hidden space-x-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-sm font-heading font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-black"
                } group`
              }
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* User Icon */}

          {user && user.role === "coordinator" && (
            <NavLink
              to={
                "/co-ordinator/dashboard"
              }
              className={({ isActive }) =>
                `relative p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-gray-100 group ${
                  isActive ? "text-orange-500 bg-orange-50" : "text-[#002277]"
                }`
              }
              aria-label="User Profile"
            >
              <FaUsersCog size={24} />
              <span className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full -top-1 -right-1"></span>
            </NavLink>
          )}

          {isAuthenticated && (
            <NavLink
              to={
                user.role === "admin" ? "/admin/dashboard" : "/student-profile"
              }
              className={({ isActive }) =>
                `relative p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-gray-100 group ${
                  isActive ? "text-orange-500 bg-orange-50" : "text-[#002277]"
                }`
              }
              aria-label="User Profile"
            >
              {userData ?(
                <div className="flex items-center justify-center gap-2">
                  <img className="rounded-full w-10 h-10 object-cover" src={userData?.profileImage} alt="profileImg" />
                </div>
              ):(
                <FaUserCircle size={24} />
              )}
              <span className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full -top-1 -right-1"></span>
            </NavLink>
          )}

          {/* Mobile Hamburger / X toggle */}
          <div className="relative lg:hidden mobile-menu-container">
            {isMobileMenuOpen ? (
              <HiX size={24} className="text-gray-700" />
            ) : (
              <button
                id="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 transition-colors duration-200 rounded-md"
                aria-label="Toggle mobile menu"
              >
                <HiOutlineMenuAlt3 size={24} className="text-gray-700" />
              </button>
            )}
          </div>

          {/* Sidebar toggle (desktop only) */}
          <button
            onClick={closeSidebar}
            className="hidden p-2 transition-colors duration-200 rounded-md lg:inline-flex"
            aria-label="Open sidebar"
          >
            <HiOutlineMenuAlt3 size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Open Sidebar directly on mobile menu open */}
      {isMobileMenuOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
      {/* Main Sidebar */}
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
};

export default Navbar;
