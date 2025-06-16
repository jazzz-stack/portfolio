import { useNavigate, useLocation } from 'react-router-dom';

export const TopNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80; // Height of your navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Height of your navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleCVClick = () => {
    navigate('/cv');
  };

  return (
    <nav className="sticky top-0 z-50 p-4 flex justify-between font-bold font-sans text-white items-center bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600 shadow-md">
      <div>Portfolio</div>
      <div>
        <button
          onClick={() => isHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : navigate('/')}
          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
          Home
        </button>
        {isHome && (
          <>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors">
              Education
            </button>
          </>
        )}
        <button
          onClick={handleCVClick}
          className={`px-4 py-2 ${!isHome ? 'bg-gray-100 text-blue-600' : ''} hover:bg-gray-100 hover:text-blue-600 hover:shadow-lg rounded-lg transition-colors`}>
          CV
        </button>
      </div>
    </nav>
  );
};
