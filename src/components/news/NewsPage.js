import React from 'react';
import DrawerUI from './DrawerUI.js';
import NavBarThree from './NavBarThree.js';
import BottomFooterTwo from './BottomFooterTwo.js';
import VideoThree from './VideoThree.js';
import VideoFour from './VideoFour.js';
import TopHeadlines from './TopHeadlines.js';
import WorldHeadlines from './WorldHeadlines.js';
import MainCardTwo from './MainCardTwo.js';

class NewsPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {

  }
}

render() {
  return (
    <div>
    <div>
    <NavBarThree />
    </div>
    <div>
    <MainCardTwo />
    </div>
    <div className="video">
      <VideoThree />
      <VideoFour />
    </div>
    <div className="headlines">
    <div className="thead">
    <TopHeadlines />
    </div>
    <div className="whead">
    <WorldHeadlines />
    </div>
    </div>
    <div className="bottomfooter">
    <DrawerUI />
    <BottomFooterTwo />
    </div>
    </div>
    );
  }
}

export default NewsPage;
