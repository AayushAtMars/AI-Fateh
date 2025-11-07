import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

// ✅ Random stock videos (free from Pexels)
const randomVideos = [
  "https://videos.pexels.com/video-files/853019/853019-hd_1280_720_25fps.mp4",
  "https://videos.pexels.com/video-files/3027431/3027431-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/3042231/3042231-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4",
];

// ✅ Random images from Unsplash
const randomImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
];

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
    title: "Technical Learning",
    description: "Innovating and coding to build solutions that matter.",
    image: randomImages[0],
    video: randomVideos[0],
  },
  {
    area: "md:[grid-area:3/7/3/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="w-4 h-4 text-orange" />,
    title: "Academic Excellence",
    description: "Where learning meets real-world understanding.",
    image: randomImages[1],
    video: randomVideos[1],
  },
  {
    area: "md:[grid-area:1/7/3/13] xl:[grid-area:1/5/3/9]",
    icon: <Lock className="w-4 h-4 text-orange" />,
    title: "Motivation in a Minute",
    description: "Daily inspiration for unstoppable learners.",
    image: randomImages[2],
    video: randomVideos[2],
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
    icon: <Sparkles className="w-4 h-4 text-orange" />,
    title: "Events & Hackathons",
    description: "Workshops, hackathons, and fests to spark creativity.",
    image: randomImages[3],
    video: randomVideos[3],
  },
  {
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/9/3/13]",
    icon: <Search className="w-4 h-4 text-orange" />,
    title: "Innovation Labs",
    description:
      "Hands-on environments for building and experimenting together.",
    image: randomImages[4],
    video: randomVideos[4],
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

  const isCenter = index === 2;
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
      {/* Top - Image/Video area */}
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

      {/* Bottom - Content Area */}
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
          <h3 className="font-sans text-sm font-semibold text-orange-500 md:text-md">
            {title}
          </h3>
          <h2 className="font-sans text-xs text-gray-900 md:text-sm">
            {description}
          </h2>
        </div>
      </div>
    </li>
  );
};
