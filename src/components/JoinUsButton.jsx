import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const JoinUsButtonHero = () => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: "0 0 8px rgba(0, 34, 119, 0.5)",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      x: 6,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(iconRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/about"
            
            className="relative inline-flex items-center justify-center py-3 pl-4 pr-4 overflow-hidden text-sm text-white transition-all duration-300 ease-in-out bg-blue-800 shadow-lg cursor-target rounded-xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:shadow-xl group"
          >
            Know More
            {/* <span className="ml-4"></span>
            <span className="absolute inset-0 button-lightning-line"></span> */}
            {/* <span className="relative z-10 arrow-container">
              <span className="absolute inset-0 bg-white rounded-full arrow-bg"></span>
              <span className="relative text-green-700 transition-transform duration-300 ease-in-out arrow-icon">
                &rarr;
              </span>
            </span> */}
          </Link>
    </button>
  );
};

export default JoinUsButtonHero;
