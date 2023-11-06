import React from 'react';
import './ProjectsPage.css';

import gluChartImage from '../../images/GluChart.jpg';
import minelessImage from '../../images/Mineless.PNG';
import officewareImage from '../../images/Officeware.png';

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1 className="project-title">Featured Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2 className="project-name">GluChart (Hackathon Project)</h2>
          <p className="project-description">
            A machine learning blood glucose level predictor for people with diabetes. Best Overall / Best Healthcare Hack at HackDavis 2023.
          </p>
          <img src={gluChartImage} alt="GluChart Preview" />
          <a className="project-details-link" href="https://devpost.com/software/gluchart" target="_blank" rel="noopener noreferrer">
            Link to Project
          </a>
        </div>
        <div className="project-item">
          <h2 className="project-name">Mineless</h2>
          <p className="project-description">
            A puzzle game where you must manage and rescue miners in a cave with an hour-long story mode campaign. Programming, story, and art assets by me.
          </p>
          <img src={minelessImage} alt="Mineless Preview" />
          <a className="project-details-link" href="https://github.com/Moragoh/Mineless-Sam" target="_blank" rel="noopener noreferrer">
            Link to Project
          </a>
        </div>
        <div className="project-item">
          <h2 className="project-name">Officeware.Inc</h2>
          <p className="project-description">
            3rd Best Game at the Cybersecurity Game Jam.
          </p>
          <img src={officewareImage} alt="OfficeWare Preview" />
          <a className="project-details-link" href="https://outcasts.itch.io/officeware" target="_blank" rel="noopener noreferrer">
            Link to Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
