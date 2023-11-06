import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import NovelPage from './components/NovelPage/NovelPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Horizontal Navigation Bar */}
        <nav>
          <ul className="nav-style">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/novel">A Novel I Wrote</Link>
            </li>
          </ul>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/novel" element={<NovelPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
