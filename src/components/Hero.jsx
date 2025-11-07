

import { useState, useEffect, useRef } from "react";
import HeroBg from "./HeroBg";
import JoinUsButtonHero from "./JoinUsButton";

const Hero = () => {
  const [bgActive, setBgActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.8s ease-out ${index * 0.2}s both`;
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollProgress = Math.min(scrollY / 400, 1);
  const heroOpacity = Math.max(0.2, 1 - scrollProgress * 0.8);
  const heroScale = Math.max(0.95, 1 - scrollProgress * 0.05);
  const blurAmount = scrollProgress * 3;

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.6);
          }
        }

        @keyframes textShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes scrollPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes chevronFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .floating-element {
          animation: floatAnimation 3s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #000 0%, #f97316 50%, #000 100%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s ease-in-out infinite;
        }

        .glow-button {
          animation: pulseGlow 2s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .glow-button:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .scroll-indicator {
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .chevron-arrow {
          animation: chevronFloat 1.5s ease-in-out infinite;
        }

        .chevron-arrow:nth-child(2) {
          animation-delay: 0.2s;
        }

        .chevron-arrow:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <section
        ref={heroRef}
        // className="relative h-screen w-full px-4 mx-auto mt-32 overflow-hidden md:h-[92vh] lg:h-[90vh] sm:px-6 lg:px-12 lg:mt-2 md:mt-2"
        className="relative w-full h-screen flex items-center justify-center px-4 mx-auto overflow-hidden sm:px-6 lg:px-12"
        onMouseEnter={() => setBgActive(true)}
        onMouseLeave={() => setBgActive(false)}
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          filter: `blur(${blurAmount}px)`,
          transition: "all 0.3s ease-out",
        }}
      >
        {/* Backgrounds */}
        <HeroBg active={bgActive} />

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-10 h-10 border-2 border-orange-300 rounded-full top-12 left-4 sm:left-10 floating-element opacity-30"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px)`,
            }}
          />
          <div
            className="absolute w-8 h-8 border-2 border-blue-300 top-1/3 right-4 sm:right-12 floating-element opacity-20"
            style={{
              transform: `rotate(45deg) translate(${mousePosition.x * -8}px, ${mousePosition.y * 8}px)`,
            }}
          />
          <div
            className="absolute w-5 h-5 bg-orange-400 rounded-full opacity-25 bottom-20 left-1/3 floating-element"
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * -10}px)`,
            }}
          />
        </div>

        {/* Main Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center pt-2 text-center sm:pt-36 md:pt-40 lg:pt-44"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 3}px)`,
          }}
        >
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="mb-6 text-sm font-medium text-white opacity-0 sm:text-base md:text-sm"
          >
            <span className="px-3 py-1.5 text-black border border-white/20 rounded-lg">
              The <span className="font-semibold text-orange-500">Super60</span> Community
            </span>
          </p>

          <h1
            ref={(el) => (textRefs.current[1] = el)}
            className="px-4 font-extrabold leading-tight tracking-tight text-black opacity-0"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 4rem)",
              lineHeight: "1.1",
            }}
          >
            <span className="block shimmer-text">A Community of Coders,</span>
            <span className="block shimmer-text">Creators &</span>
            <span className="block text-orange-500">Achievers.</span>
          </h1>

          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="max-w-3xl px-4 mt-4 text-xs opacity-0 black sm:text-base md:text-sm"
          >
            Unlock your true potential with the{" "}
            <span className="font-semibold text-orange-500">Super60</span> Community — immersive
            learning, real-world projects, and a culture of excellence.
          </p>

          <div ref={(el) => (textRefs.current[3] = el)} className="mt-8 opacity-0">
            <JoinUsButtonHero />
          </div>

          {/* New Scroll Indicator Design */}
          <div
            className="mt-1 text-white scroll-indicator"
            style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
          >
            <div className="flex flex-col items-center gap-3">
              
              <span className="text-xs text-[#002277] font-medium sm:text-sm relative top-20">Scroll to explore</span>
              
              {/* Circular indicator with animated chevrons */}
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full sm:w-12 sm:h-12 border-white/40 backdrop-blur-sm bg-white/10">
                  <div className="flex flex-col items-center space-y-0.5">
                    <div className="chevron-arrow w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white opacity-80"></div>
                    <div className="chevron-arrow w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white opacity-60"></div>
                    <div className="chevron-arrow w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white opacity-40"></div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-10 h-10 border rounded-full sm:w-12 sm:h-12 border-orange-400/30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade Shadow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none sm:h-20 bg-gradient-to-t from-white to-transparent"
          style={{ opacity: scrollProgress }}
        />
      </section>
    </>
  );
};

export default Hero;
