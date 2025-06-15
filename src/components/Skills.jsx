export const Skills = () => {
  const skills = [
    "React Native", "Reactjs", "JavaScript & ES6", "Jest", "JSX", "CSS",
    "TypeScript", "RESTful API's", "Redux", "GitHub", "Azure DevOps",
    "Socket API", "Redux-toolkit", "GraphQL", "AppDynamics", "Git",
    "ServiceNow", "React-Bootstrap", "App Store & Play Store", "Full Story"
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
