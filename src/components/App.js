import React, {PropTypes} from 'react';
//import MainPage from './mainpage/MainPage.js';
import  UserHomePage from './userhomepage/UserHomePage.js';



    //The above is for the app side of the page the very front page


      // <div>
      // <UserHomePage />

      // </div>

    //  <MuiThemeProvider>
    //  <NewsPage />
    // </MuiThemeProvider>
      // <MainPage />


class App extends React.Component {
  render() {
    return (
      <div className="appParent">
        <UserHomePage />
      </div>
    );
  }
}

export default App;
