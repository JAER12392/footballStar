import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import DrawerUI from './DrawerUI.js';
import NavBarThree from './NavBarThree.js';
import BottomFooterTwo from './BottomFooterTwo.js';
import VideoThree from './VideoThree.js';
import VideoFour from './VideoFour.js';
import TopHeadlines from './TopHeadlines.js';
import WorldHeadlines from './WorldHeadlines.js';
import MainCardTwo from './MainCardTwo.js';
import Headlines from './Headlines.js';

class NewsPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    // onToggleTopHeadLines: false,
    // onToggleWorldlines: false,
    // onToggleHealines: false

  }
  // this.onToggleTopHeadlines = this.onToggleTopHeadLines.bind(this);
  // this.onToggleWorldlines = this.onToggleWorldlines.bind(this);
  // this.onToggleHeadlines = this.onToggleHealines.bind(this);
}

// onToggleTopHeadlines() {
//   this.setState({
//     onToggleTopHeadlines: !this.state.onToggleTopHeadlines
//   });
// }

// onToggleWorldlines() {
//   this.setState({
//     onToggleWorldlines: !this.state.onToggleWorldlines
//   });
// }

// onToggleHeadlines() {
//   this.setState({
//     onToggleHeadlines: !this.state.onToggleHeadlines
//   });
// }


//Jquery Variables
// const togTP = $('.headlines').closest('div').animate({'top': '-14px', 'opacity': '1')



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
    <div className="hhead">
    <Headlines />
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
