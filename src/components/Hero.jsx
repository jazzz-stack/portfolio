export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">JASVANT RAJ</h1>
          <h2 className="text-2xl md:text-3xl mb-2">React Native Developer</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <a
              href="mailto:jaswant.raj45@gmail.com"
              className="hover:text-blue-200">
              jaswant.raj45@gmail.com
            </a>
            <span>|</span>
            <a href="tel:+918052004200" className="hover:text-blue-200">
              +91-8052004200
            </a>
            <span>|</span>
            <a
              href="https://linkedin.com/in/jaswant-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200">
              LinkedIn
            </a>
          </div>
          <p className="text-lg">Lucknow, Uttar Pradesh, India, 226016</p>
        </div>
      </div>
    </div>
  );
};
