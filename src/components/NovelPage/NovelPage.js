import React, { useEffect, useState } from 'react';
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
          <br /> <br />
          I am very grateful that I was able to finish it and share it with others--even if it is full of flaws and not very good at all. Below are the first four chapters. If you want to somehow read more
          after going through it, please shoot me an email at: jnm.kim.josh@gmail.com.
        </p>
      </div>

      {/* <p>Link to the sample:</p> */}

      <a href="https://drive.google.com/file/d/1wzyCiFgXcBR1F5bq9wprgDWtQciZDt9k/view?usp=sharing" className="unstyled-link-novel-page" target="_blank" rel="noreferrer">Link to PDF</a>
      <a href="https://open.spotify.com/playlist/2wKxNkT4hk1yFqqZHj3mnf?si=352b751628af4d4b" className="unstyled-link-novel-page" target="_blank" rel="noreferrer">Companion Playlist</a>



      {/* To Display it as raw text */}
      {/* Use dangerouslySetInnerHTML to render HTML content (the content of the .txt file)
      <p className="novel-content" dangerouslySetInnerHTML={{ __html: novelContent }} />  */}
    </div>
  );
}

export default NovelPage;
