import React, {PropTypes} from 'react';
//import MainPage from './mainpage/MainPage.js';
//import  UserHomePage from './userhomepage/UserHomePage.js';
//import LoginPage from './loginpage/LoginPage.js';
//import AncedotePage from './anecdotepages/AncedotePage.js';
import PlayerPage from './playerspage/PlayerPage.js';


class App extends React.Component {
  render() {
    return (
      <div className="appParent">
          <PlayerPage />
      </div>
    );
  }
}

export default App;
