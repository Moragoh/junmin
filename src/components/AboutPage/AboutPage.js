import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

// Image imports
import cgImage from '../../images/CFCAbandoned.JPG';
import Monterey1 from '../../images/Monterey1.jpg';
import yongsanImage from '../../images/yongsan.jpg';

function AboutPage() {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <p>Hello there. My name is Jun Min. I'm currently an undergraduate student at UC Davis majoring in Computer Science. My main interests include Machine Learning, Backend, and Game Development.
          I was born in Seoul, South Korea, although I've been back and forth between the United States and Korea many times.
          I was in West Lafayette, Indiana for a year and a half when I was 12 as my brother attended Purdue University there. <br></br> <br></br>
          I came back to the States again in the 11th grade for high school in Monterey, California.
          Although I was only there for two years, I hold memories from all of my time there very fondly. I go there from time to time,
          convincing a friend that the 3-hour drive from Davis to Monterey is worth it (and thankfully they agree afterward, although they are very unhappy when the inevitable traffic jam around San Jose occurs).
        </p>
        <div className="picture-container">
          <img src={Monterey1} alt="Picture 1" className="about-picture" />
          <p className="about-subtext">Purple skies in Monterey, and two of my friends from back then</p>
        </div>
      </div>

      <div className="about-content">
        <p>The pandemic brought me back to Korea toward the end of my senior year of high school. I would stay the next three years in Korea. The rest
          of my high school education and the first year of virtual college would be the first half, and my conscription in the Korean Army to complete
          my mandatory service the latter half. <br></br> <br></br>
          I applied to be a translator for English, and I was fortunate enough to not only be selected for the role but to be able to serve alongside servicemembers
          of the US military at United States Army Garrison Yongsan and Camp Humpreys.
        </p>
        <div className="picture-container">
          <img src={yongsanImage} alt="Picture 2" className="about-picture" />
        </div>
        <p className="about-subtext">View of Seoul's Namsan Tower from USAG Yongsan</p>
      </div>

      <div className="about-content">
        <p>It was a difficult time in the army--I was away from home; not allowed to set foot outside of the parameters of the base with the exception of short approved leaves
          which was few and far between, lost sleep as I completed my guard shifts from 2-4 AM only to get up at 6:30 the next morning, all the while feeling like the
          rest of the world, the friends I had known, were moving on away.  <br></br> <br></br>
          But it was also a beautiful time--I made the greatest friends a person could ask for, people that would bring me a big smile from just the sight of them and vice-versa;
          ran 10km every day as I competed to be on of the top runners of my unit (one day of leave was promised to the top-three runners, and ruining my knee to get out of service a day
          early seemed like a good deal back then), read every moment I could at the office when I didn't have documents to translate, and wrote my novel in the evenings. <br></br> <br></br>
          Friends, exercise, reading, and a novel. All in all, not too bad.

        </p>
        <div className="picture-container">
          <img src={cgImage} alt="Picture3" className="about-picture" />
        </div>
        <p className="about-subtext">Me and my army buddies, one summer day in Yongsan</p>
      </div>

      <div className="about-content">
        <p>Now I am back in the United States again, having returned to school in Spring of 2023. Funnily enough, this was my first time
          in Davis due to the pandemic. Currently I am working towards by degree in Computer Science, all the while working on personal programming projects
          to expand on my passions. I've also finished the book I wrote in the Army, and have shared it with a few friends of mine for feedback.
          <br></br> <br></br>
          But that's enough about me!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
