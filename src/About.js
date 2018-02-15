import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id="about">
        <h1 class= "aboutTitle">About Me</h1>

        <p class="bio">
If I won the lottery, I would be a degree collector. That is because I always want to learn. That is why I changed my career to the ever growing field of web development. That is the reason I am a Full Stack Developer. I want to continually learn something new.
</p>
<p class="bio">

I completed the Galvanize Full Stack Web Development Immersive Program. Throughout the program I have created projects with the following technologies: JavaScript, HTML, CSS, Node.js, Angular JS, Express, jQuery, Postgres, MongoDB React Native, Redux, Ionic 2, Socket.IO, and more.
</p>
<p class="bio">
Outside of working, I spend my free time being outside, traveling as much as I can, seeing live music, skiing in the mountains, drawing cartoons on clothing, and wanting to discover the next cult movie.
</p>
        <p class="bio">
Thank you for visiting AustinTEdwards.com
</p>
      </div>
    );
  }
}

export default About;
