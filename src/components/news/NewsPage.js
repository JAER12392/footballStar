import React from 'react';
import DrawerUI from './DrawerUI.js';
import NavBarThree from './NavBarThree.js';
import BottomFooterTwo from './BottomFooterTwo.js';

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
    <DrawerUI />
    </div>
    <div>
      <BottomFooterTwo />
    </div>
    </div>
    );
  }
}

export default NewsPage;
