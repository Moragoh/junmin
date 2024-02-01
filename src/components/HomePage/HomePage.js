import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './HomePage.css';
import quotesData from '../../data/quotes.json'; // Adjust the file path as needed

const quotes = quotesData.quotes;
<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/cmu-typewriter" type="text/css"/> 

function HomePage() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="home-page-container">
      <div className="centered-content">
        <h1>Jun Min Kim</h1>
        <p className='introduction'>Nice to meet you. My name is Jun Min, although you can just call me Jun.</p>
        <div className='quote-container'>
          <p className="quote-text">{randomQuote.text}</p>
          <p className="quote-text">{randomQuote.author}</p> {/* Display the author below the quote */}
        </div>
        <div className="link-content">
          <Link to="/junmin/about" className="unstyled-link">About Me</Link>
          <Link to="/junmin/projects" className="unstyled-link">Projects</Link>
          <Link to="https://github.com/Moragoh" className="unstyled-link" target="_blank" rel="noopener noreferrer">Github</Link>
          <Link to="/junmin/novel" className="unstyled-link">Things I Wrote</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
