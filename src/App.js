import React, {Component} from 'react';
import './App.css';
import Title from './Title';
import Portfolio from './Portfolio';
import Resume from './Resume';
import About from './About';
import Drawings from './Drawings';

class App extends Component {
  myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  active(n) {
    let x = document.getElementsByTagName("a")
    console.log(x, n)
    // x.forEach((a)=>{
    //   console.log(a)
    // })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="topnav" id="myTopnav">
            <a href="#title" className="active">Home</a>
            <a href="#portfolio" onClick={() => this.active(1)}>Portfolio</a>
            <a href="#resume">Resume</a>
            <a href="#about">About</a>
            <a href="#drawings">Drawings</a>
            <a href="javascript:void(0);" className="icon" onClick={() => this.myFunction()}>&#9776;</a>
          </div>
        </header>
        <div className="botnav" id="myBotnav">
          <img className = "gmail" src="/icon/gmail.png"></img>
          <img className = "galvanize" src="/icon/galvanize.png"></img>
          <img className = "github" src="/icon/github.png"></img>
          <img className = "linkedin" src="/icon/linkedin.png"></img>
        </div>
        <Title/>
        <Portfolio/>
        <Resume/>
        <About/>
        <Drawings/>

      </div>
    );
  }
}

export default App;
