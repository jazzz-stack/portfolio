export const Skills = () => {
  const skills = [
    "React Native",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Redux-toolkit",
    "ES6",
    "Git",
    "Azure DevOps",
    "App Launching",
    "CICD (GitHub Actions)",
    "App Maintenance",
    "HTML",
    "Jest",
    "JSX",
    "CSS",
    "RESTful API's",
    "GitHub",
    "Socket API",
    "GraphQL",
    "AppDynamics",
    "ServiceNow",
    "React-Bootstrap",
    "Full Story",
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow-sm shadow-blue-300 hover:shadow-blue-300 hover:shadow-lg transition-shadow duration-200 text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
