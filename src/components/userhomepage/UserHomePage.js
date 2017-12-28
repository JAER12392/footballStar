import React from 'react';
import LoggedInHeader from './LoggedInHeader.js';
import MainCard from './MainCard.js';
import VideoOne from './Video-One.js'
import VideoTwo from './Video-Two.js'
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
          <div id="second-section">
              <div id="second-section-videos">
              <VideoOne />
              <Col className="notecardone" l={4} m={6} s={12}>
                  <Card className='red' offset="s1" textClassName='white-text' title='Card title'>
                  I am a very simple card.
                  </Card>
              </Col>
              <VideoTwo />

              <Col className="notecardtwo" l={4} m={6} s={12}>
                  <Card className='red' textClassName='white-text' title='Card title'>
                  I am a very simple card.
                  </Card>
              </Col>
              </div>
              <div id="second-section-notecards">
              </div>

          </div>
      </div>
      );
  }

}

export default UserHomePage;
