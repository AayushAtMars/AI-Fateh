import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";
import photo from "../../assets/Photo.jpg";
import main from "../../assets/videos/get.mp4";
import Lab from '../../assets/videos/Lab.mp4';
// import Tech from "../../assets/videos/Tech.mp4"
// import Eventvideo from "../../assets/videos/Event.mp4"
import ImageOne from '../../assets/one.jpg'
import ImageTwo from '../../assets/second.jpg'
import ImageThree from '../../assets/Third.jpg'
import ImageFour from '../../assets/fifth.jpg'
import { useRef, useState } from "react";
  
import SectionHeader from "../Section/SectionHeader";

export default function GlowingEffectDemo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
     <SectionHeader  
  section="What We Do"
  title="Driving Impact Through Action"
  subtitle="From learning to leadership — here's how we make a difference"
  color="#002277" 
/>


      {/* Your existing grid */}
      <ul className="grid max-w-[75%] grid-cols-1 gap-4 mx-auto md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-2">
        {items.map((item, i) => (
          <GridItem
            key={i}
            index={i}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            {...item}
          />
        ))}
      </ul>
    </>
  );
}

const items = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="w-4 h-4 text-orange" />,
    title: "Technical",
    description: "Running out of copy so I'll write anything.",
    image: ImageOne,       // default image slot
    video: 'https://res.cloudinary.com/dnzmrkvzn/video/upload/v1753522231/Tech_abg3kq.mp4',   // default video slot
  },
  {
    area: "md:[grid-area:3/7/3/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="w-4 h-4 text-orange" />,
    title: "Strong Academic Learning",
    description: "Yes, it's true. I'm not even kidding.",
    image: ImageThree,
    video: 'https://res.cloudinary.com/dnzmrkvzn/video/upload/v1753522266/Ignite_jfqyvr.mp4',
  },
  {
    area: "md:[grid-area:1/7/3/13] xl:[grid-area:1/5/3/9]",
    icon: <Lock className="w-4 h-4 text-orange" />,
    title: "Motivation In a Minute",
    description: "It's the best money you'll ever spend",
    image: photo,
    video: main,
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
    icon: <Sparkles className="w-4 h-4 text-orange" />,
    title: "Events In Super60",
    description: "From workshops to tech fests — explore and relive our most exciting moments.",
    image: ImageTwo,
    video: 'https://res.cloudinary.com/dnzmrkvzn/video/upload/v1753522255/Event_ouwoxx.mp4',
  },
  {
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/9/3/13]",
    icon: <Search className="w-4 h-4 text-orange" />,
    title: "Technical and Project Labs",
      description: "Hands-on spaces where innovation meets execution — from coding to building real-world solutions.",
    image: ImageFour,
    video: Lab,
  },
];
const GridItem = ({
  index,
  hoveredIndex,
  setHoveredIndex,
  area,
  icon,
  title,
  description,
  image,
  video,
}) => {
  const videoRef = useRef(null);
  const isHovered = hoveredIndex === index;
  const anyHovered = hoveredIndex !== null;

  // For center card, adjust video/content split
  const isCenter = index === 2; // change if center card varies
  const videoRatio = isCenter
    ? isHovered
      ? 0.8
      : 0.7
    : isHovered
    ? 0.65
    : 0.55;
  const contentRatio = 1 - videoRatio;

  const handleMouseEnter = () => {
    setHoveredIndex(index);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <li
      className={`cursor-target min-h-[20rem] list-none ${area} flex flex-col transition-opacity duration-500 ease-in-out ${
        anyHovered && !isHovered ? "opacity-40" : "opacity-100"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "opacity 0.5s" }}
    >
      {/* Top - Image/Video area, dynamic height */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          flexBasis: `${videoRatio * 100}%`,
          height: `${videoRatio * 100}%`,
          minHeight: isCenter ? "210px" : "160px",
          transition: "flex-basis 0.5s, height 0.5s",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <img
          src={image}
          alt="Background"
          className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
          style={{
            filter: "brightness(0.85)",
            opacity: isHovered ? 0.4 : 1,
            position: "absolute",
            inset: 0,
          }}
        />
        <video
          ref={videoRef}
          src={video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            zIndex: 1,
          }}
        />
      </div>

      {/* Bottom - White Content Area, dynamic height */}
      <div
        className={`
          relative z-30 flex items-center justify-center gap-3
          pt-1 pb-3 px-6 bg-white/90
          transition-all duration-500 ease-in-out
          border-b border-l border-r border-gray-200
          rounded-b-2xl
          ${isHovered ? "opacity-100" : anyHovered ? "opacity-70" : "opacity-100"}
        `}
        style={{
          flexBasis: `${contentRatio * 100}%`,
          height: `${contentRatio * 100}%`,
          minHeight: isCenter ? "55px" : "70px",
          transition: "flex-basis 0.5s, height 0.5s, opacity 0.5s",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <span className="flex flex-row items-center justify-center p-2 text-orange-600 border border-orange-600 rounded-lg md:flex-col bg-orange/10">
          {icon}
        </span>
        <div className="flex flex-col justify-center gap-1">
          <h3 className="font-sans text-sm font-semibold text-orange-500 md:text-md">{title}</h3>
          <h2 className="font-sans text-xs text-gray-900 md:text-sm">{description}</h2>
        </div>
      </div>
    </li>
  );
};
