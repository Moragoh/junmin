import React, { useState, useEffect } from 'react';
import './NovelPage.css';

function NovelPage() {
  const [novelContent, setNovelContent] = useState('');

  useEffect(() => {
    // Fetch and load the novel content from a .txt file
    fetch('./MontereyStoryFirst4.txt') 
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
      <div className="novel-quotecontainer">
        <p className="novel-quote">“Monterey is a place, a grating noise, a quality of light, a tone, a habit, a nostalgia, a dream.” </p>
        <p className="novel-quote">John Steinbeck, Cannery Row </p>
      </div>

      <div className="novel-intro">
        <p>
          A couple months before my mandatory service in the army were to start in September of 2021, I was in search of a project. An accomplishment that I could complete by the time I was out of the army. 
          To be honest with you, I was very afraid that the time I would spend in the army would set me back from all of my peers, who were able to continue with their studies. I was desperately looking for something 
          that could serve as proof to myself that my time was not wasted. 
          <br/> <br/>
          I would have opted for a project related to programming under normal circumstances, but my circumstances were anything but. I did not know which base I would be assigned at. 
          And since enlisted men aren't allowed any personal devices other than their phones (and a very limited access at that), it meant that my plans would be dead in the water if I did not end up at a base with access to computers. 
          <br/> <br/>
          I needed a Plan B. A project I could pursue no matter where I ended up, whether that was in Seoul or at the DMZ bordering North Korea. And there were three things I knew for sure I would have access to in the army: novels, notebooks, and a pencil.
          So out of the availability of those three items, along with the fact that I had always enjoyed storytelling, I decided that my project would be to finish a novel in a year and a half. 
          <br/> <br/>
          At the time, I had been in Korea for a year and a half, both finishing my high school diploma and starting my studies at UC Davis virtually from home. The last time I was in the States in high school in Monterey, California, before 
          I had to abruptly return home due to the pandemic. Missing Monterey dearly, I decided that should be the setting of my book. 
          <br/> <br/>
          It turned out that the base I was stationed at had a computer after all. It had a small room with a few old machine, connected to busted-up keyboards with spacebars that refused to work. But by the time I had there 
          after boot camp I was already set on writing a novel, so I decided to stick with the goal despite the access to computers.  
          And after around a year of writing in that old yellow room, waging war every night with a terrible keyboard that would just not listen, I was able to complete my first draft.
          <br/> <br/>
          Looking back, I don't think I would consider my time in the army a waste even without the novel. Still, having the novel to work through got me through some of the most challenging times there,
          and I am very grateful that I was able to finish it and share it with others--even if it is full of flaws and not very good at all. Below are the first four chapters. If you want to somehow read more 
          after going through it, feel free to shoot me an email at: jnm.kim.josh@gmail.com.
        </p>
      </div>
      {/* Use dangerouslySetInnerHTML to render HTML content */}
      <p className="novel-content" dangerouslySetInnerHTML={{ __html: novelContent }} />
    </div>
  );
}

export default NovelPage;
