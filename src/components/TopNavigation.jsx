export const TopNavigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 p-4 flex justify-between font-bold font-sans text-white items-center bg-gradient-to-r from-blue-600 to-blue-600 shadow-md">
      <div>Portfolio</div>
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          Skills
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          Projects
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors">
          Education
        </button>
      </div>
    </nav>
  );
};
