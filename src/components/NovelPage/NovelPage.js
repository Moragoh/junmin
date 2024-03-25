import React, { useState, useEffect } from 'react';
import './NovelPage.css';

function NovelPage() {
  const [novelContent, setNovelContent] = useState('');

  // Getting the text from a .txt file
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/MontereyStoryFirst4.txt')
      .then((response) => response.text())
      .then((data) => {
        // Replace newline characters with HTML line breaks
        const formattedContent = data.replace(/\n/g, '<br /> <br />');
        setNovelContent(formattedContent);
      })
      .catch((error) => {
        console.error('Error fetching novel content:', error);
      });
  }, []);

  return (
    <div className="novel-page-container">
      <h1 className="novel-title">A Monterey Story</h1>
      <p className="novel-description">A story of a man that can time travel in his dreams, and his journey across the United States to Monterey, California</p>
      <div className="novel-quotecontainer">
        <p className="novel-quote">“Monterey is a place, a grating noise, a quality of light, a tone, a habit, a nostalgia, a dream.” </p>
        <p className="novel-quote">John Steinbeck, Cannery Row </p>
      </div>

      <div className="novel-intro">
        <p>
          A novel I wrote during my service in the army.
          <br/> <br/>
          I am very grateful that I was able to finish it and share it with others--even if it is full of flaws and not very good at all. Below are the first four chapters. If you want to somehow read more 
          after going through it, please shoot me an email at: jnm.kim.josh@gmail.com.
        </p>
      </div>

      <p>Click the link below to view the sample:</p>

      <a href="../../pdfs/A_Monterey_Story_Sample.pdf" download="A_Monterey_Story_Sample.pdf">Download PDF</a>
      
      {/* To Display it as raw text */}
      {/* Use dangerouslySetInnerHTML to render HTML content (the content of the .txt file)
      <p className="novel-content" dangerouslySetInnerHTML={{ __html: novelContent }} />  */}
    </div>
  );
}

export default NovelPage;
