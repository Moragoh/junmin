import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import NovelPage from './components/NovelPage/NovelPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Horizontal Navigation Bar */}
        <nav>
          <ul className="nav-style">
            <li>
              <Link to="/junmin">Home</Link>
            </li>
            <li>
              <Link to="/junmin/about">About</Link>
            </li>
            <li>
              <Link to="/junmin/projects">Projects</Link>
            </li>
            <li>
              <Link to="/junmin/novel">Things I Wrote</Link>
            </li>
          </ul>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/junmin/about" element={<AboutPage />} />
          <Route path="/junmin/projects" element={<ProjectsPage />} />
          <Route path="/junmin/novel" element={<NovelPage />} />
          <Route path="/junmin" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
