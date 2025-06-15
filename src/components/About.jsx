export const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className=" mx-auto space-y-4 text-gray-600">
          <p className="text-lg leading-relaxed">
            As a Senior Software Engineer with over 5.5 years of specialized experience in mobile and web development, 
            I've established myself as a technical leader in building sophisticated cross-platform applications. 
            My core expertise lies in React Native and React.js development, complemented by deep knowledge of modern JavaScript, 
            TypeScript, and state management solutions.
          </p>
          
          <p className="text-lg leading-relaxed">
            Throughout my career journey from Infranix Technologies to my current role at Centric Consulting, 
            I've consistently delivered high-impact results:
            <ul className="list-disc list-inside mt-3 ml-4 space-y-2">
              <li>Spearheaded the transformation of legacy codebases to TypeScript, resulting in a 40-50% enhancement in code quality and maintainability</li>
              <li>Reduced app crash rates by 20% through implementation of robust error handling and comprehensive testing strategies</li>
              <li>Successfully integrated complex features including In-App Purchases, handling 200+ video content transactions</li>
              <li>Mentored junior developers and support engineers, improving team efficiency by 30%</li>
            </ul>
          </p>

          <p className="text-lg leading-relaxed">
            In my current position at Centric Consulting, I've expanded beyond pure development to drive business growth, 
            leading initiatives in AI strategy and cloud solutions that resulted in a 40% increase in client acquisition. 
            I combine technical expertise with business acumen to deliver solutions that not only meet technical requirements 
            but also drive measurable business outcomes.
          </p>
          
          <p className="text-lg leading-relaxed">
            I'm passionate about creating efficient, scalable applications and constantly stay updated with emerging technologies 
            and best practices in the React Native ecosystem. My approach focuses on writing clean, maintainable code while 
            ensuring exceptional user experiences across all platforms.
          </p>
        </div>
      </div>
    </section>
  );
};
