

import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const   Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    revenue: 0,
    partners: 0,
    projects: 0,
    events: 0
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const achievements = [
    {
      id: 'revenue',
      value: 400000,
      prefix: '₹',
      suffix: '+',
      label: 'Revenue Generated',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      barColor: 'bg-[#002277]'
    },
    {
      id: 'partners',
      value: 50,
      prefix: '',
      suffix: '+',
      label: 'Tech Partners',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      barColor: 'bg-orange-500'
    },
    {
      id: 'projects',
      value: 100,
      prefix: '',
      suffix: '+',
      label: 'Projects Delivered',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      barColor: 'bg-[#002277]'
    },
    {
      id: 'events',
      value: 30,
      prefix: '',
      suffix: '+',
      label: 'Community Events',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      barColor: 'bg-orange-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          startCounterAnimation();
        }
      },
      { threshold: 0.3 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    achievements.forEach((ach, idx) => {
      let frame = 0;
      const animate = () => {
        frame++;
        const progress = frame / totalFrames;
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(ach.value * ease);
        setCounters(prev => ({ ...prev, [ach.id]: current }));
        if (frame < totalFrames) requestAnimationFrame(animate);
        else setCounters(prev => ({ ...prev, [ach.id]: ach.value }));
      };
      setTimeout(animate, idx * 200);
    });
  };

  const formatNumber = num => {
    if (num >= 100000) return (num / 100000).toFixed(1) + 'L';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <SectionHeader  
  section="Our Achievements"
  title="Celebrating Milestones of Excellence"
  subtitle="A journey marked by dedication and remarkable success"
  color="#002277" 
/>

        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((ach, idx) => (
            <div key={ach.id}
              className={`cursor-target bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm transition duration-500 ease-out transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center mb-4 rounded-full shadow w-14 h-14 bg-gray-50">
                {ach.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {ach.prefix}{ach.id === 'revenue' ? formatNumber(counters[ach.id]) : counters[ach.id]}{ach.suffix}
              </div>
              <div className="mt-2 text-lg text-gray-700">{ach.label}</div>
              <div className="w-full h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
                <div
                  className={`h-full ${ach.barColor} transition-all duration-1000`}
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${idx * 200 + 300}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
