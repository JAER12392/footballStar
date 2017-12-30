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
              <div className="notecardone">
              <Col l={4} m={6} s={12}>
                  <Card className='red' offset="s1" textClassName='white-text' title='Predicting The 2017-18 Premier League Season'>
                    The Premier League is back! Who will win the title in 2017-18? Who will finish in the coveted Champions League spots? Which the three clubs will go down? And who will finish as top scorer and player of the year?
                  </Card>
              </Col>
              </div>
              <VideoTwo />
              <div className="notecardtwo">
              <Col l={4} m={6} s={12}>
                  <Card className='red' textClassName='white-text' title='Reaction to the 2018 World Cup Draw'>
                  The draw for the group stage of the 2018 FIFA World Cup is complete.
                  With the 2018 FIFA World Cup around the corner we will discuss who are the favorites and who can become the dark horse of the tournmanent.
                  </Card>
              </Col>
              </div>
              </div>
              <div id="second-section-notecards">
              <Col l={4} m={6} s={12}>
                  <Card className='red' textClassName='white-text' title='Reaction to the 2018 World Cup Draw'>
                  The draw for the group stage of the 2018 FIFA World Cup is complete.
                  With the 2018 FIFA World Cup around the corner we will discuss who are the favorites and who can become the dark horse of the tournmanent.
                  </Card>
              </Col>
              <Col l={4} m={6} s={12}>
                  <Card className='red' textClassName='white-text' title='Reaction to the 2018 World Cup Draw'>
                  The draw for the group stage of the 2018 FIFA World Cup is complete.
                  With the 2018 FIFA World Cup around the corner we will discuss who are the favorites and who can become the dark horse of the tournmanent.
                  </Card>
              </Col>
              </div>

          </div>
      </div>
      );
  }

}

export default UserHomePage;
