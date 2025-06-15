import { } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { TopNavigation } from './components/TopNavigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <TopNavigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </div>
    </Router>
  );
}

export default App
