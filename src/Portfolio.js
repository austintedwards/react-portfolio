import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div class="row">

<div class="grid-example col s12 m6">
<h3 class= "dice">Liar's Dice</h3>
<img class = "dice" src="gif/dicePort.gif"/>
<div id="modalDi" class="modal">
  <div class="modal-content">
    <h4 class= "dice">Liar's Dice</h4>
      <p>An in-person multiplayer phone app for the liar’s dice game.  Download TODAY!</p>
      <p>Technologies Used: Iconic 2, Angular 2, MongoDB, Socket.IO</p>
    <div class="row">
    <video controls muted autoplay class="videoLiar"  src="videos/LiarsDiceDemo.m4v" type="video/mov"></video>
  </div>
    <div class="row">
      {/* <div class="grid-example col s12 m6"><img class = "download apple" src="images/apple.png" alt=""></div> */}
      <div class="grid-example col s12 m6">
        {/* <img class = "download android" src="images/android.png" alt=""></div> */}
    </div>
    {/* <div class="grid-example col s12 m12">
      <img class = "githubDice" src="images/github.png" alt="">
    </div> */}
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-action modal-close waves-effect waves-blue btn-flat">Done</a>
  </div>
</div>
</div>
</div>


<div class="grid-example col s12 m6">
<h3 class= "blueFire">Activity Now</h3>
<img class = "blueFire" src="gif/BlueFire.gif"/>
</div>
<div id="modalFire" class="modal">
  <div class="modal-content">
    <h4 class= "blueFire">Activity Now</h4>
    <p>A search map of different outdoor activities in the desired area.</p>
    <p>Technologies Used: jQuery, Mapbox, XML to Json, CORS, GPS, Materialize</p>
    {/* <div class="grid-example col s12 m6">
    <img class= "actNow" src="images/lumberjack.gif" alt="">
  </div>
    <div class="grid-example col s12 m6">
    <img class = "githubActivity" src="images/github.png" alt="">
    </div> */}
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-action modal-close waves-effect waves-blue btn-flat">Done</a>
  </div>
</div>

<div class="grid-example col s12 m6">
<h3 class= "gratune">Gratune</h3>
<img class = "gratune" src="gif/Gratune.gif"/>
</div>

<div id="modalGrat" class="modal">
  <div class="modal-content">
    <h4 class= "gratune">Gratune</h4>
      <p>A venue/user integrated web app to promote free music in your town.</p>
      <p>Technologies Used: React Native, Redux, MongoDB, mLab</p>
    <div class="row">
    <div class="grid-example col s12 m6">
    <video  controls muted autoplay class= "gratune"   height="300" src="videos/gratune.mov" type="video/mov"></video>
  </div>

    {/* <div class="grid-example col s12 m6">
    <img class = "githubGratune" src="images/github.png" alt="">
  </div> */}


  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-action modal-close waves-effect waves-blue btn-flat">Done</a>
  </div>
</div>
</div>
      <div class="grid-example col s12 m6">
      <h3 class= "pixel">Pixel Art Maker</h3>
      <img class = "pixel" src="gif/pixel.gif"/>
    </div>

      <div id="modalPixel" class="modal">
        <div class="modal-content">
          <h4 class= "pixel">Pixel Art Marker</h4>
          <p>Pixel Art Marker where you can make your own art</p>
          <p>I have used the assignment throughout my cohort for AJAX onclick and building a interactive screen</p>
          <div class="row">
            {/* <div class="grid-example col s12 m6">
              <img class="pixelLink" src="images/paintbush.png" alt="">
            </div>
          <div class="grid-example col s12 m6">
              <img class="githubPixel" src="images/github.png" alt="">
          </div> */}
        </div>
          </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-blue btn-flat">Done</a>
        </div>
      </div>


      </div>
    </div>

    );
  }
}

export default Portfolio;
