import React from 'react';
import NavBarTwo from './NavBarTwo.js';
import MainCard from './MainCard.js';
import SubCardOne from './SubCardOne.js';
import SubCardTwo from './SubCardTwo.js';
import VideoOne from './VideoOne.js';
import VideoTwo from './VideoTwo.js';
import BottomFooter from './BottomFooter.js';


class UserHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <div>
          <div>
          <NavBarTwo />
          </div>
          <div>
          <MainCard />
          </div>
          <div className="videoOne">
            <VideoOne />
          </div>
          <div className="subcardone">
            <SubCardOne />
            </div>
          <div className="videoTwo">
            <VideoTwo />
          </div>
          <div className="subcardtwo">
            <SubCardTwo />
            </div>
          <div>
            <BottomFooter />
          </div>
          </div>
      );
  }
}


export default UserHomePage;
