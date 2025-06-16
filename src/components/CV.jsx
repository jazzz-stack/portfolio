import { useRef } from 'react';
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

export const CV = () => {
  const cvRef = useRef(null);
  const navigate = useNavigate();
  
  const handleDownload = () => {
    const element = cvRef.current;
    const opt = {
      margin: 0,
      filename: 'JasvantRaj_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const contactInfo = {
    email: "jasvantraj@gmail.com",
    phone: "+91 7897686054",
    github: "https://github.com/jazzz-stack",
    linkedin: "https://www.linkedin.com/in/jaswant-raj",
    location: "Gurugram, India",
  };

  const certifications = [
    {
      name: "Problem-Solving Techniques",
      issuer: "LinkedIn Learning",
      date: "03-2025",
    },
    {
      name: "GitHub Copilot Fundamentals",
      issuer: "Microsoft",
      date: "04-2025",
    },
    {
      name: "Software Design Patterns",
      issuer: "LinkedIn Learning",
      date: "04-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-[850px] mx-auto">
        {/* Header buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition-colors shadow-sm">
            <FaArrowLeft className="text-sm" /> Back to Portfolio
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition-colors shadow-sm">
            <FaDownload className="text-sm" /> Download PDF
          </button>
        </div>

        <div
          ref={cvRef}
          className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-10">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2 tracking-tight">
                  Jasvant Raj
                </h1>
                <h2 className="text-xl text-slate-200 mb-4">
                  Senior Frontend Engineer
                </h2>
                <div className="space-y-2 text-slate-200">
                  <div className="flex items-center gap-2">
                    <MdOutlineEmail className="text-lg" />
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-lg" />
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                  <div className="text-slate-200">{contactInfo.location}</div>
                </div>
              </div>
              <div className="space-y-2 text-slate-200">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaGithub className="text-lg" /> GitHub
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
                Summary
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Senior Frontend Engineer with 5+ years of experience
                specializing in React.js and React Native development. Proven
                expertise in developing scalable web and mobile applications
                serving 100K+ users using JavaScript/TypeScript and modern
                frontend tools. Led technical teams implementing Redux state
                management, RESTful APIs, and GraphQL integrations that improved
                application performance by 60%. Strong background in CI/CD
                practices with GitHub Actions and Azure DevOps.
              </p>
            </section>

            {/* Core Competencies */}
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Core Technologies
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>React Native</li>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>HTML5/CSS3</li>
                    <li>JSX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    State & APIs
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>Redux</li>
                    <li>Redux-toolkit</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                    <li>Socket API</li>
                    <li>React-Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    DevOps & Tools
                  </h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>Git/GitHub</li>
                    <li>Azure DevOps</li>
                    <li>CI/CD (GitHub Actions)</li>
                    <li>Jest</li>
                    <li>AppDynamics</li>
                    <li>ServiceNow/Full Story</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
                Professional Experience
              </h3>

              {/* Software Consultant */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      Software Consultant
                    </h4>
                    <p className="text-slate-600">
                      Centric Consulting, Gurugram, India
                    </p>
                  </div>
                  <p className="text-slate-600">April 2025 - Present</p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                  <li>
                    Promoted to Software Consultant role in recognition of
                    exceptional performance and leadership abilities
                  </li>
                  <li>
                    Leading technical architecture decisions and providing
                    strategic consulting to key clients
                  </li>
                  <li>
                    Mentoring team members and driving adoption of best
                    practices across projects
                  </li>
                  <li>
                    Architecting enterprise-level React and React Native
                    applications serving 100K+ users
                  </li>
                </ul>
              </div>

              {/* Senior Software Engineer */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      Senior Software Engineer
                    </h4>
                    <p className="text-slate-600">
                      Centric Consulting, Gurugram, India
                    </p>
                  </div>
                  <p className="text-slate-600">July 2022 - April 2025</p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                  <li>
                    Implemented 100+ User Stories and led unit testing efforts,
                    reducing app crashes by 20% and improving UX metrics by 15%
                  </li>
                  <li>
                    Trained support engineers, achieving 30% improvement in
                    troubleshooting efficiency
                  </li>
                  <li>
                    Led migration from REST to GraphQL, reducing API calls by
                    30% and improving data efficiency
                  </li>
                  <li>
                    Expanded services into 15 new markets through technical
                    innovation and quality delivery
                  </li>
                </ul>
              </div>

              {/* React Native Developer - Suffescom */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      Senior React Native Developer
                    </h4>
                    <p className="text-slate-600">
                      Suffescom Solutions Pvt., Chandigarh, India
                    </p>
                  </div>
                  <p className="text-slate-600">December 2021 - June 2022</p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                  <li>
                    Led development of AER Electric Ride-Share platform, achieving 100K+ downloads and 4.8/5 rating
                  </li>
                  <li>
                    Architected and implemented real-time tracking and payment systems for ride-sharing ecosystem
                  </li>
                  <li>
                    Established TypeScript and testing standards, improving code quality metrics by 40%
                  </li>
                  <li>
                    Successfully launched 4+ applications on App Store and Play Store with 99.9% crash-free rate
                  </li>
                </ul>
              </div>

              {/* React Developer - Coding Brains */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      Senior React Native Developer
                    </h4>
                    <p className="text-slate-600">
                      Coding Brains, Lucknow, India
                    </p>
                  </div>
                  <p className="text-slate-600">June 2021 - December 2021</p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                  <li>
                    Led healthcare platform development with HIPAA compliance and secure document handling
                  </li>
                  <li>
                    Maintained 90% unit test coverage across multiple client projects
                  </li>
                  <li>
                    Spearheaded migration of legacy web applications to React Native, reducing maintenance costs by 40%
                  </li>
                  <li>
                    Mentored junior developers and implemented code review practices improving team efficiency by 25%
                  </li>
                </ul>
              </div>

              {/* React Native Developer - Infranix */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      React Native Developer
                    </h4>
                    <p className="text-slate-600">
                      Infranix Technologies, Lucknow, India
                    </p>
                  </div>
                  <p className="text-slate-600">February 2020 - June 2021</p>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                  <li>
                    Developed Box Pro Fitness platform with real-time workout tracking and social features
                  </li>
                  <li>
                    Built and launched 10+ cross-platform applications using React Native and Redux
                  </li>
                  <li>
                    Implemented in-app purchases and subscription management systems
                  </li>
                  <li>
                    Created reusable component library reducing development time by 40%
                  </li>
                </ul>
              </div>
            </section>

            {/* Technical Projects */}
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
                Featured Projects
              </h3>

              <div className="space-y-4">
                {/* Rev.IO FSA */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">
                        Rev.IO FSA - Enterprise Field Service Platform
                      </h4>
                      <p className="text-slate-600">Lead Mobile Developer</p>
                    </div>
                    <p className="text-slate-600">04/2024 - Present | USA</p>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                    <li>
                      Led development of enterprise-grade React Native application serving 2K+ field service agents
                    </li>
                    <li>
                      Implemented robust offline-first architecture with cash data and custom sync engine, enabling 99.9% uptime
                    </li>
                    <li>
                      Architected real-time notification system and signature capture functionality using WebSocket
                    </li>
                    <li>
                      Reduced app size by 40% and improved startup time by 60% through code optimization
                    </li>
                    <li>
                      Achieved 95% crash-free sessions with comprehensive unit and integration testing
                    </li>
                  </ul>
                </div>

                {/* PepsiCo - MiNegocio+ */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">
                        PepsiCo - MiNegocio+ B2B Platform
                      </h4>
                      <p className="text-slate-600">Senior Software Engineer</p>
                    </div>
                    <p className="text-slate-600">07/2022 - 04/2024 | USA</p>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                    <li>
                      Spearheaded development of B2B ordering platform handling $10M+ monthly transactions
                    </li>
                    <li>
                      Implemented enterprise SSO with OKTA and role-based access control for 10K+ users
                    </li>
                    <li>
                      Architected offline-first PWA using React.js and Redux, achieving 99% order completion rate
                    </li>
                    <li>
                      Reduced API response time by 60% through GraphQL implementation and query optimization
                    </li>
                    <li>
                      Led migration from monolith to microservices architecture, improving scalability by 300%
                    </li>
                  </ul>
                </div>

                {/* AER Electric Ride-Share */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">
                        AER Electric Ride-Share Ecosystem
                      </h4>
                      <p className="text-slate-600">Lead React Native Developer</p>
                    </div>
                    <p className="text-slate-600">12/2021 - 06/2022 | Chandigarh</p>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
                    <li>
                      Architected and delivered full-stack ride-sharing platform handling 10K+ daily rides
                    </li>
                    <li>
                      Implemented real-time location tracking and matching algorithm using Firebase and Google Maps
                    </li>
                    <li>
                      Built secure payment gateway processing $1M+ monthly transactions with 99.9% success rate
                    </li>
                    <li>
                      Achieved 4.8/5 rating on both App Store and Play Store with 100K+ downloads
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <section>
              <h3 className="text-xl font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">
                Education & Certifications
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-700">
                        Master of Computer Application
                      </p>
                      <p className="text-slate-600">
                        Chandigarh University
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600">12/2017 - 05/2019</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-700">
                        Bachelor of Computer Application
                      </p>
                      <p className="text-slate-600">
                        Makhanlal Chaturvedi National University
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600">12/2013 - 06/2016</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  Professional Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-slate-700">
                          {cert.name}
                        </p>
                        <p className="text-slate-600">{cert.issuer}</p>
                      </div>
                      <p className="text-slate-600">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
