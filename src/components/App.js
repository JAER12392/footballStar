import React, {PropTypes} from 'react';
//import LoginPage from './home/LoginPage.js';
import UserHomePage from './userHome/UserHomePage.js';
//import JumboTron from './home/JumboTron.js';
//import NavBar from './home/NavBar.js'

// <div>
// <NavBar />
// </div>
// <div>
// <JumboTron />
// </div>

class App extends React.Component {
  render() {
    return (
    <div>
      <div>
      <UserHomePage />
      </div>
    </div>
    );
  }
}

export default App;
