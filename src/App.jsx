import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { TopNavigation } from './components/TopNavigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { About } from './components/About';
import { CV } from './components/CV';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 page-transition">
        <TopNavigation />
        <main className="transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
