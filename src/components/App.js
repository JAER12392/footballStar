import React, {PropTypes} from 'react';
import MainPage from './mainpage/MainPage.js';





    //The above is for the app side of the page the very front page


      // <div>
      // <UserHomePage />

      // </div>

    //  <MuiThemeProvider>
    //  <NewsPage />
    // </MuiThemeProvider>


class App extends React.Component {
  render() {
    return (
      <div className="appParent">
        <MainPage />
      </div>
    );
  }
}

export default App;
