import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Page Components
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* 1. The Home route now contains ALL sections stacked together */}
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="skills"><Skills /></section>
              <section id="portfolio"><Portfolio /></section>
              <section id="achievements"><Achievements /></section>
              <section id="contact"><Contact /></section>
            </>
          } />

          {/* 2. Keep these as separate pages if needed */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;