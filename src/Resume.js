import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <h1>Resume</h1>
        <a href = "/images/resume.pdf"><img className="resume" src = "/images/resume.png"></img></a>
      </div>
    );
  }
}

export default Resume;
