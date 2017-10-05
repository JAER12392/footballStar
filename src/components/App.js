import React, {PropTypes} from 'react';
// import LoginPage from './home/LoginPage.js';
// import JumboTron from './home/JumboTron.js';
// import NavBar from './home/NavBar.js'
import NewsPage from './news/NewsPage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


      // <div>
      // <NavBar />
      // </div>
      // <div>
      // <JumboTron />
      // </div>
      // <div>
      // <LoginPage />
      // </div>


class App extends React.Component {
  render() {
    return (
    <div>
     <MuiThemeProvider>
      <NewsPage />
    </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
