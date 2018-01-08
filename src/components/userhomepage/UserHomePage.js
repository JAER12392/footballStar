import React from 'react';
import LoggedInHeader from './LoggedInHeader.js';
import MainCard from './MainCard.js';
import VideoOne from './Video-One.js'
import VideoTwo from './Video-Two.js'
import VideoThree from './Video-Three.js';
import CollapseButton from './CollapseButton.js';
import { Col, Card } from 'react-materialize';
import 'materialize-css';

class UserHomePage extends React.Component {
  render() {
    return (
      <div>
          <LoggedInHeader />
              <div id="main-card">
                  <MainCard />
          </div>
              <div id="section-one">
              <p id="timeline-videos">Videos of the Week </p>
              <div className="vid-1">
              <VideoOne />
              <div className="vid-2">
              <VideoTwo />
              <div className="vid-3">
              <VideoThree />
              </div></div></div>
              <p id="timeline-headline">World Headlines </p>
                <CollapseButton />
              </div>
              <footer>
                <ul>
                 <li><a href="https://www.linkedin.com/in/jesus-alberto-esquivel-ramos-zeus-36a5ab120/" target="blank">LinkedIn</a></li>
                 <li><a href="https://github.com/JAER12392" target="blank">Github</a></li>
                 <li><a href="https://www.facebook.com/jesus.esquivel.92" target="blank">Facebook</a></li>
              </ul>
              </footer>

      </div>
      );
  }

}

export default UserHomePage;
