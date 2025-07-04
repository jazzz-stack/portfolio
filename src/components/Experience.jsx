import { useLayoutEffect, useRef, useState } from "react";

export const Experience = () => {
  const experiences = [
    {
      role: "Software Consultant",
      company: "Centric Consulting",
      period: "04/2025 - Present",
      location: "Gurugram",
      description: [
        "Promoted to Software Consultant role in recognition of exceptional performance and leadership abilities",
        "Leading technical architecture decisions and providing strategic consulting to key clients",
        "Mentoring team members and driving adoption of best practices across projects",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Centric Consulting",
      period: "07/2022 - 04/2025",
      location: "Gurugram",
      description: [
        "Established Centric Consulting as a leader in AI strategy, cyber risk management, and cloud solutions, driving a 40% increase in client acquisition, 25% revenue growth, and expanding into 15 new markets.",
        "Implemented 100+ new User Stories, addressing critical bugs and leading unit testing efforts which resulted in a 20% reduction in app crashes and improved user experience metrics by 15%",
        "Trained support engineers, achieving a 30% improvement in troubleshooting efficiency.",
      ],
    },

    {
      role: "React Native Developer",
      company: "Suffescom Solutions Pvt.",
      period: "12/2021 - 06/2022",
      location: "Chandigarh",
      description: [
        "Cloned 6+ projects and added new features and functionality.",
        "Transform the JavaScript code to TypeScript, and it increases by 40-50% code quality",
        "Published 4+ Applications on the app store and Play Store successfully.",
      ],
    },
    {
      role: "React Native & ReactJs Developer",
      company: "Coding Brains",
      period: "06/2021 - 12/2021",
      location: "Lucknow",
      description: [
        "Maintain regular client communication, implement innovative features, commit code on GitHub, and ensure 90% unit test coverage.",
        "Analyzed design specs and documentation, improving product and code quality by 20%. Migrated React web apps to React Native, enhancing development efficiency by 25% and reducing bugs by 40%.",
        "Worked with a web team that increased by 40% of productivity.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Infranix Technologies",
      period: "02/2020 - 06/2021",
      location: "Lucknow",
      description: [
        "Created streamlined code templates, enhancing integration, increasing coding efficiency by 10%, and reducing code review times by 20%.",
        "Integrated In-App Purchase features for 200+ videos on both platforms.",
        "Created and tested 10+ apps for cross-platform within 6 months of training.",
      ],
    },
    {
      role: "Intern- Software Engineer",
      company: "Infowiz Software Solution",
      period: "02/2019 - 06/2019",
      location: "Chandigarh",
      description: [
        "Gained hands-on experience at north India's leading Industrial Training company.",
        "Contributed to the company's evolution as a trustworthy brand in the training industry.",
      ],
    },
  ];

  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const { height } = cardRef.current.getBoundingClientRect();
      setCardHeight(height);

      // Set up resize observer to update height when content changes
      const observer = new ResizeObserver(() => {
        const { height } = cardRef.current.getBoundingClientRect();
        setCardHeight(height);
      });

      observer.observe(cardRef.current);

      return () => observer.disconnect();
    }
  }, []);

  console.log("cardHeight", cardHeight);
  
  return (
    <section className="py-10" id="experience">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="relative pl-2">
                {index < experiences.length - 1 &&
                  experiences[index + 1].company === exp.company && (
                    <div
                      className="absolute -left-6 w-1 bg-blue-400"
                      style={{ height: `${cardHeight + 32}px`, top: cardHeight / 2 + 10 + "px" }}
                    >
                      <div className="absolute w-8 h-1  bg-blue-400 -left-0 top-0"></div>
                      <div className="absolute w-8 h-1  bg-blue-400 -left-0 bottom-0"></div>
                    </div>
                  )}
                <div
                  ref={cardRef}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-300 shadow-blue-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
