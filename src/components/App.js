import React, {PropTypes} from 'react';
//import MainPage from './mainpage/MainPage.js';
//import  UserHomePage from './userhomepage/UserHomePage.js';
//import LoginPage from './loginpage/LoginPage.js';
import AncedotePage from './anecdotepages/AncedotePage.js';



class App extends React.Component {
  render() {
    return (
      <div className="appParent">
        <AncedotePage />
      </div>
    );
  }
}

export default App;
