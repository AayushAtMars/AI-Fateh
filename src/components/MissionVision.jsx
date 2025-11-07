import React from 'react';

const MissionVision = () => {
  const missionPoints = [
  {
    id: 1,
    title: "Unlock True Potential",
    description:
      "Our mission is to identify raw talent and transform it into excellence through personalized guidance, mentorship, and structured learning."
  },
  {
    id: 2,
    title: "Nurture Lifelong Learners",
    description:
      "We aim to instill curiosity, resilience, and discipline, enabling individuals to adapt, innovate, and thrive in an ever-changing world."
  },
  {
    id: 3,
    title: "Empower Through Knowledge",
    description:
      "Providing access to world-class resources, mentorship, and opportunities that bridge the gap between aspiration and achievement."
  },
  {
    id: 4,
    title: "Build a Culture of Excellence",
    description:
      "Creating an ecosystem where collaboration, integrity, and determination fuel success—together we rise as a community of achievers."
  }
];

const visionPoints = [
  {
    id: 1,
    title: "Shaping Tomorrow’s Leaders",
    description:
      "We envision Super60 as a launchpad for future leaders who drive innovation, inspire change, and create meaningful global impact."
  },
  {
    id: 2,
    title: "Global Recognition",
    description:
      "To establish Super60 as a symbol of excellence where talent meets opportunity, known worldwide for producing exceptional achievers."
  },
  {
    id: 3,
    title: "Innovation with Purpose",
    description:
      "We aspire to pioneer innovative approaches in learning and leadership that not only elevate individuals but also uplift communities."
  },
  {
    id: 4,
    title: "Legacy of Impact",
    description:
      "Our vision is to leave behind a legacy of empowered individuals who continue the cycle of mentoring, growth, and positive transformation."
  }
];


  return (
    <div className="py-12 mt-28 mb-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
              OUR MISSION AND VISION
            </span>
          </div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Driving <span className="text-orange-500">excellence</span> through purpose
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            Super 60 is an elite community of passionate learners and innovators, united by the 
            vision to challenge limits and redefine success. Our mission is to cultivate skills, 
            mindset, and leadership qualities that empower each member to excel in academics, 
            technology, and life. Together, we are building a culture of discipline, creativity, 
            and unstoppable growth.
          </p>
        </div>

        {/* Mission and Vision Side by Side */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Mission Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="mb-8 text-4xl font-bold text-gray-900">
                MISSION
              </h3>
              <div className="hidden lg:block lg:absolute lg:opacity-5">
                <div className="w-32 h-32 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            {/* Mission Points */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={point.id} className="flex items-start space-x-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-orange-500 rounded-full">
                      {point.id}
                    </div>
                    {index < missionPoints.length - 1 && (
                      <div className="w-px h-12 mt-2 bg-gray-300"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-1 border-2 border-blue-800 rounded-full">
                        <div className="w-1.5 h-1.5 mx-auto mt-0.5 bg-blue-800 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="mb-2 text-lg font-bold text-gray-900">
                          {point.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="mb-8 text-4xl font-bold text-gray-900">
                VISION
              </h3>
              <div className="hidden lg:block lg:absolute lg:opacity-5">
                <div className="w-32 h-32 bg-blue-500 rounded-full"></div>
              </div>
            </div>
             
            {/* Vision Points */}
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div key={point.id} className="flex items-start space-x-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-blue-800 rounded-full">
                      {point.id}
                    </div>
                    {index < visionPoints.length - 1 && (
                      <div className="w-px h-12 mt-2 bg-gray-300"></div>
                    )}
                  </div>
                   
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-1 border-2 border-orange-700 rounded-full">
                        <div className="w-1.5 h-1.5 mx-auto mt-0.5 bg-orange-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="mb-2 text-lg font-bold text-gray-900">
                          {point.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;