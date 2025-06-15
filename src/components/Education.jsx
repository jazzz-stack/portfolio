export const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Chandigarh University",
      period: "12/2017 - 05/2019"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Makhanlal Chaturvedi National University",
      period: "12/2013 - 06/2016"
    }
  ];

  const achievements = [
    "Employee of the year award - Award for performing well in the team.",
    "Silver medal - A marathon race competition medal."
  ];

  return (
    <section className="py-16" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Achievements</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
