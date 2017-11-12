import React, {PropTypes} from 'react';
// import LoginPage from './home/LoginPage.js';
// import JumboTron from './home/JumboTron.js';
// import NavBar from './home/NavBar.js';
//import UserHomePage from './userhome/UserHomePage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewsPage from './news/NewsPage.js'



    // <div className="appParent">
    //   <NavBar />
    //   <JumboTron />
    //   <LoginPage />
    // </div>
    //The above is for the app side of the page the very front page


      // <div>
      // <UserHomePage />

      // </div>



class App extends React.Component {
  render() {
    return (
     <MuiThemeProvider>
     <NewsPage />
    </MuiThemeProvider>
    );
  }
}

export default App;
