import { useState, useEffect, useRef } from "react";
import yatin_bhaskar_duggal  from "../../assets/testimonial_image/yatin_bhaskar_duggal.png"
import deepti_negi from "../../assets/testimonial_image/deepti_negi.jpeg"
import yash_khandelwala from "../../assets/testimonial_image/yash_khandelwala.jpeg"
import vikrant_rathour from "../../assets/testimonial_image/vikrant_rathour.jpeg"
import jobanpreet_singh from "../../assets/testimonial_image/jobanpreet_singh.jpeg"

const HomeTestimonial = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  
  const testimonials = [
    {
      id: 1,
      name: "Yatin Bhaskar Duggal",
      role: "Public Speaker",
      company: "youth parliament",
      image: yatin_bhaskar_duggal,
      quote: "True leadership is not about power, but about inspiring voices to be heard. Together, we shape the future by empowering the youth to speak up and create change.",
      rating: 5,
      project: "Delhi Youth Parliament"
    },
    {
      id: 2,
      name: "Deepti Negi",
      role: "Senior Manager",
      company: "SPECTRAFORCE India",
      image: deepti_negi,
      quote: "The caliber of professionals in Super60 is exceptional. Working alongside industry leaders on challenging projects accelerated my growth exponentially. It's not just a community—it's a career catalyst.",
      rating: 5,
      project: "Payroll management"
    },
    {
      id: 3,
      name: "Yash Khendelwal",
      role: "Founder and CEO",
      company: "Xpensease",
      image: yash_khandelwala,
      quote: "Super60's emphasis on excellence and innovation pushed me beyond my comfort zone. The collaborative environment and high standards helped me secure my leadership position at Adobe.",
      rating: 5,
      project: "Firebase, GCP, fintech developer"
    },
    {
      id: 4,
      name: "Vikrant Rathour",
      role: "Technical Lead",
      company: "Code Cyper",
      image: vikrant_rathour,
      quote: "The technical depth and professional standards at Super60 are unmatched. Every project is a masterclass in engineering excellence. This community shapes industry leaders.",
      rating: 5,
      project: "XR/VR & AI Specialist"
    },
    {
      id: 5,
      name: "Jobanpreet singh",
      role: "Data Scientist",
      company: "Erginous Techology",
      image: jobanpreet_singh,
      quote: "Super60's data-driven approach and cutting-edge projects gave me the expertise to contribute to Tesla's autonomous driving technology. The community's impact on my career is immeasurable.",
      rating: 5,
      project: "Generative AI Enthusiast"
    }
  ];


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const { name, role, company, image, quote, rating, project } = testimonials[active];

  return (
    <section className="px-4 py-2 overflow-hidden">
      <div className="cursor-target max-w-xl mx-auto overflow-hidden shadow-xl rounded-3xl bg-white/70 backdrop-blur-md">
        {/* Image with wavy transition */}
        <div className="relative flex items-center justify-center w-full h-40 overflow-hidden rounded-t-3xl">
          <img src={image} alt={name} className="z-50 flex items-center p-4 mt-4 rounded-full h-44 w-44" />

          {/* Wavy Shape at bottom of image */}
          <svg
            className="absolute left-0 w-full h-44 bottom-[-10]"
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C150,80 350,0 500,30 L500,0 L0,0 Z"
              fill="url(#waveGradient)"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff8c00 " />
                <stop offset="100%" stopColor="#ff8c00 " />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role} @ {company}</p>

          <blockquote className="mt-4 text-lg italic text-gray-800">
            “{quote}”
          </blockquote>

          {/* Rating */}
          <div className="flex justify-center mt-4">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p className="inline-block px-4 py-1 mt-4 text-sm font-medium text-blue-900 rounded-full bg-gradient-to-r from-blue-100 to-orange-100">
             {project}
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active
                ? 'bg-gradient-to-r from-blue-600 to-orange-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HomeTestimonial;
