import React, { useRef, useEffect, useState } from "react";
import Glass_rdbg from "./glass_roadmap_bg/glass_rdbg";
import { AnimatePresence, motion } from "framer-motion";

// const sectionData = [
//   {
//     id: "top-left",
//     title: "Fundamentals of Design & Editing",
//     description:
//       "From ideas to polished designs — Figma, branding, and editing essentials.",
//     customStyle: { marginTop: "0rem" },
//     items: [
//       {
//         title: "Graphic Design Basics",
//         badge: null,
//         x: "0rem",
//         width: "90%",
//         description: "Learn the basics of graphic design.",
//       },
//       {
//         title: "Video Editing Fundamentals",
//         badge: "+ Revisions",
//         x: "2rem",
//         width: "90%",
//         description: "Master Adobe Premiere Pro and DaVinci Resolve basics.",
//       },
//       {
//         title: "Marketing & Engagement",
//         badge: null,
//         x: "-3rem",
//         width: "90%",
//         description: "Understand how to reach audiences effectively.",
//       },
//       {
//         title: "Real-World Application",
//         badge: "+ Revisions",
//         x: "2rem",
//         width: "90%",
//         description: "Apply your skills to real client-based tasks.",
//       },
//     ],
//   },
//   {
//     id: "top-right",
//     title: "Web Development Training Model",
//     description:
//       "Build from scratch to production-ready — HTML to frameworks with hands-on projects.",
//     customStyle: { marginTop: "35rem" },
//     items: [
//       {
//         title: "HTML, CSS, & JavaScript",
//         badge: "+ Revisions",
//         x: "3rem",
//         width: "85%",
//         description: "Learn to build and style modern web pages.",
//       },
//       {
//         title: "Responsive Design",
//         badge: null,
//         x: "0rem",
//         width: "90%",
//         description: "Make your websites adaptable to all screens.",
//       },
//       {
//         title: "Frameworks & Tools",
//         badge: "+ Revisions",
//         x: "3rem",
//         width: "85%",
//         description: "Explore React, Tailwind, and version control with Git.",
//       },
//       {
//         title: "Client-Ready Projects",
//         badge: null,
//         x: "0rem",
//         width: "90%",
//         description: "Deploy polished apps for real-world users.",
//       },
//     ],
//   },
//   {
//     id: "bottom-left",
//     title: "Branding & Identity Design",
//     description:
//       "Creating memorable digital identities that connect with real audiences.",
//     customStyle: { marginTop: "2rem" },
//     items: [
//       {
//         title: "Peer Learning",
//         badge: "+ Sessions",
//         x: "1.5rem",
//         width: "88%",
//         description: "Learn through collaboration and feedback.",
//       },
//       {
//         title: "Real Projects",
//         badge: null,
//         x: "0rem",
//         width: "95%",
//         description: "Design logos, kits, and materials for real clients.",
//       },
//     ],
//   },
//   {
//     id: "bottom-right",
//     title: "Event Management & Public Execution",
//     description:
//       "Lead, coordinate, and execute high-impact tech events inside and outside campus.",
//     customStyle: { marginTop: "35rem" },
//     items: [
//       {
//         title: "C++ Workshop",
//         badge: "+ Coordination",
//         x: "2rem",
//         width: "90%",
//         description: "Organize and teach technical workshops.",
//       },
//       {
//         title: "SkillUp Sessions",
//         badge: "+ Feedback",
//         x: "1rem",
//         width: "85%",
//         description: "Plan, run, and review learning events.",
//       },
//     ],
//   },
// ];


const sectionData = [
  {
    id: "top-left",
    title: "Next-Gen Design & Creative Editing",
    description:
      "Step into the future of creative industries by mastering the fusion of design fundamentals with cutting-edge technologies. This track equips learners to think like designers, storytellers, and innovators while using AI, 3D, and immersive tools to craft experiences that stand out in global digital markets.",
    customStyle: { marginTop: "0rem" },
    items: [
      {
        title: "AI-Assisted Design",
        badge: "🔥 Trending",
        x: "0rem",
        width: "90%",
        description:
          "Go beyond static tools by integrating AI-powered platforms like MidJourney, Adobe Firefly, Runway Gen-2, and DALL·E into your design workflow. Learn how to generate high-quality creative drafts, mood boards, and brand concepts in minutes. Dive into prompt engineering for visual AI, ethical use of generative design, and advanced customization techniques that merge machine efficiency with human originality. Understand how to refine AI outputs into polished professional visuals, saving time without losing authenticity.",
      },
      {
        title: "Motion Graphics & 3D Editing",
        badge: "+ Revisions",
        x: "2rem",
        width: "90%",
        description:
          "Master After Effects, Blender, and Cinema4D to build everything from smooth logo animations to complex product simulations. Learn particle effects, keyframe dynamics, 3D lighting, and rendering pipelines. Combine 2D and 3D layers to create hybrid visuals, apply VFX compositing techniques, and design immersive explainer videos. Explore how motion enhances brand recall, social media engagement, and storytelling in marketing campaigns.",
      },
      {
        title: "AR/VR Experience Design",
        badge: "XR",
        x: "-3rem",
        width: "90%",
        description:
          "Enter the world of immersive storytelling. Design AR filters, VR brand experiences, and interactive 3D environments for platforms like Spark AR, Unity, and Unreal Engine. Learn the principles of spatial design, real-time rendering, and user interaction in XR spaces. Understand how AR and VR experiences are reshaping marketing, education, and entertainment, and build your own prototypes ready for consumer and enterprise applications.",
      },
      {
        title: "Real-World Campaigns",
        badge: "+ Industry",
        x: "2rem",
        width: "90%",
        description:
          "Apply everything you learn to real client campaigns. From brainstorming creative direction to delivering final assets, experience the full production pipeline: ideation, prototyping, revisions, quality assurance, and delivery. Work with collaboration tools like Figma, Notion, Trello, and Slack to simulate professional workflows. Build a portfolio of real-world visuals, videos, and branding systems that demonstrate not just technical skills but also strategic, client-facing design expertise.",
      },
    ],
  },
  {
    id: "top-right",
    title: "Modern Web Development & Cloud Engineering",
    description:
      "Transform from a beginner into a future-ready full-stack developer by mastering front-end, back-end, cloud-native workflows, and AI/Web3 integration. This track focuses not just on coding, but also on scalability, deployment, and delivering real-world solutions for businesses and clients.",
    customStyle: { marginTop: "35rem" },
    items: [
      {
        title: "Next.js, React, & Tailwind",
        badge: "+ Revisions",
        x: "3rem",
        width: "85%",
        description:
          "Learn how to create lightning-fast, interactive, and highly scalable user interfaces using React and Next.js. Understand component-driven development, server-side rendering, static site generation, and API integration. Style apps with Tailwind CSS for rapid prototyping and consistent UI design. Gain mastery of state management with Redux Toolkit and Context API, while learning best practices for accessibility, SEO optimization, and performance tuning.",
      },
      {
        title: "Cloud-Native Development",
        badge: "☁️ Cloud",
        x: "0rem",
        width: "90%",
        description:
          "Move from coding locally to deploying at scale. Understand containerization with Docker, orchestration with Kubernetes, and serverless computing with AWS Lambda. Explore deployment pipelines on AWS, Google Cloud, and Vercel. Learn Continuous Integration and Continuous Deployment (CI/CD) workflows using GitHub Actions and GitLab CI. Discover how cloud monitoring, logging, and scaling help applications serve millions of users with minimal downtime.",
      },
      {
        title: "AI-Powered Web Apps",
        badge: "🤖 AI",
        x: "3rem",
        width: "85%",
        description:
          "Bring intelligence to your applications by integrating AI/ML services. Learn to connect with OpenAI APIs for natural language processing, Hugging Face for model hosting, and TensorFlow.js for client-side machine learning. Build AI chatbots, recommendation systems, sentiment analyzers, and personalization engines. Explore prompt engineering, data pipelines, and ethical use of AI in production systems.",
      },
      {
        title: "Web3 & Blockchain Basics",
        badge: "🪙 Web3",
        x: "0rem",
        width: "90%",
        description:
          "Dive into the decentralized internet with blockchain-powered apps. Learn the foundations of Ethereum, smart contracts in Solidity, and decentralized storage solutions like IPFS. Build simple dApps (Decentralized Apps) with wallet integrations (MetaMask), explore NFT minting, and understand DeFi basics. Discover how Web3 is redefining ownership, payments, and identity management in the digital world.",
      },
    ],
  },
  {
    id: "bottom-left",
    title: "Future-Ready Branding & Identity Design",
    description:
      "Branding is no longer just about a logo — it’s about creating ecosystems that adapt across digital-first, AI-driven, and immersive platforms. This track teaches how to build strong brand identities that thrive in fast-changing markets and connect deeply with audiences worldwide.",
    customStyle: { marginTop: "2rem" },
    items: [
      {
        title: "Neuro-Branding & Psychology",
        badge: "🧠 New",
        x: "1.5rem",
        width: "88%",
        description:
          "Explore the science of why people remember brands. Learn how colors, typography, and design patterns influence perception, trust, and emotions. Study case studies of global brands using neuroscience principles to boost recognition and loyalty. Apply these findings to create logos, campaigns, and assets that not only look good but trigger subconscious brand recall.",
      },
      {
        title: "Brand Systems & Digital Assets",
        badge: null,
        x: "0rem",
        width: "95%",
        description:
          "Build complete identity systems instead of isolated visuals. Learn how to design adaptive brand kits with consistent typography, color palettes, iconography, and UI components. Develop templates for social media, pitch decks, and websites. Create digital-first brand assets that work seamlessly across platforms like Instagram, LinkedIn, TikTok, VR spaces, and interactive websites.",
      },
      {
        title: "AI in Branding",
        badge: "⚡ Fast",
        x: "2rem",
        width: "90%",
        description:
          "Harness AI to automate and enhance brand design. Use AI tools to generate creative variations, analyze audience sentiment, and predict visual performance. Learn automated ad copywriting, AI-driven content calendars, and personalization systems that adapt branding in real time. Discover how AI is transforming branding from a one-time exercise into a living, evolving system.",
      },
    ],
  },
  {
    id: "bottom-right",
    title: "Event Tech, Public Execution & Smart Engagement",
    description:
      "Event management in the modern age is about blending physical presence with digital technologies. From hybrid conferences to smart networking systems, this track helps learners plan, execute, and lead events that are tech-driven, engaging, and globally impactful.",
    customStyle: { marginTop: "35rem" },
    items: [
      {
        title: "Hybrid & Virtual Events",
        badge: "🌍 Live",
        x: "2rem",
        width: "90%",
        description:
          "Plan and deliver events that seamlessly combine in-person audiences with digital platforms. Learn to set up livestreams, manage interactive Q&A systems, and host workshops in platforms like Zoom, Hopin, and Gather. Experiment with Metaverse-based events using Spatial or Horizon Worlds. Understand how to maximize inclusivity, accessibility, and engagement for global participants.",
      },
      {
        title: "Smart Event Tech",
        badge: "💡 Tools",
        x: "1rem",
        width: "85%",
        description:
          "Use technology to make events smarter and more engaging. Explore RFID-based entry systems, QR-enabled networking, AI matchmaking for participants, and AR gamification tools. Learn about analytics dashboards that track engagement in real-time, giving organizers insights to improve experiences and drive ROI. Prepare for the future of events where tech is at the center of participant interaction.",
      },
      {
        title: "Leadership & Coordination",
        badge: "+ Feedback",
        x: "1rem",
        width: "85%",
        description:
          "Develop strong leadership qualities required for managing teams, coordinating logistics, and handling high-pressure environments. Learn how to assign roles, manage sponsorships, collaborate across marketing and technical teams, and respond to last-minute challenges. Master communication strategies to ensure every participant, vendor, and stakeholder feels valued and aligned with the event goals.",
      },
    ],
  },
];



const GlassRoadmap = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState({}); // key: `${section.id}-${index}`

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      let p = 1 - Math.min(Math.max(rect.top / windowH, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (sectionId, idx) => {
    const key = `${sectionId}-${idx}`;
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen px-4 py-32 mt-20 overflow-hidden text-black transition-colors duration-700 bg-orange-600"
    >
      <Glass_rdbg progress={progress} />

      {/* Title */}
      <div className="relative z-10 mb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-[Montserrat] text-white">
          The Super60 Roadmap
        </h1>
        <p className="mt-4 text-lg text-orange-100 font-[Roboto]">
          A structured journey through design, development, leadership, and delivery.
        </p>
      </div>

      {/* Grid Sections */}
      <div className="relative z-10 grid grid-cols-1 grid-rows-2 mx-auto gap-7 md:gap-4 md:grid-cols-2 max-w-7xl">
        {sectionData.map((section) => (
          <div
            key={section.id}
            className="relative flex flex-col px-6 md:px-12"
            style={section.customStyle}
          >
            {/* Line + Dot */}
            <div className="absolute top-0 left-0 w-1 h-full rounded-full bg-white/20">
              <div className="absolute top-0 w-4 h-4 bg-white border-2 border-orange-300 rounded-full -left-1" />
            </div>

            {/* Section Title */}
            <div className="pl-6 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] text-white">
                {section.title}
              </h2>
              <p className="text-orange-100 text-md mt-2 font-[Roboto] max-w-lg">
                {section.description}
              </p>
            </div>

            {/* Items */}
            <div className="relative flex flex-col gap-6 ml-6">
              {section.items.map((step, index) => {
                const key = `${section.id}-${index}`;
                const isOpen = expanded[key];
                return (
                  <div
                    key={key}
                    className={`cursor-target relative bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 pl-6 pr-6 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
                    style={{
                      marginLeft: step.x || "0rem",
                      width: step.width || "90%",
                    }}
                    onClick={() => handleToggle(section.id, index)}
                  >
                    {/* Title & Badge */}
                    <div className="flex flex-col font-[DM Sans] ">
                      <span className="text-base font-semibold">{step.title}</span>
                      {step.badge && (
                        <span className="mt-1 text-sm text-orange-200">{step.badge}</span>
                      )}
                    </div>

                    {/* Plus icon animated */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute text-xl font-light select-none right-4 top-4"
                    >
                      +
                    </motion.div>

                    {/* Description Expandable */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="cursor-target"
                        >
                          <p className="text-orange-100 text-sm font-[Roboto]">
                            {step.description ||
                              "This is a detailed description for this step. You can customize this per item."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Center Line */}
      <div className="absolute top-0 bottom-0 z-0 w-1 left-1/2 bg-white/10" />
    </div>
  );
};

export default GlassRoadmap;
