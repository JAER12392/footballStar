import React, {PropTypes} from 'react';
import LoginPage from './home/LoginPage.js';
import JumboTron from './home/JumboTron.js';



class App extends React.Component {
  render() {
    return (
    <div>
      <div>
      <JumboTron />
      </div>
      <div>
      <LoginPage />
      </div>
    </div>
    );
  }
}

export default App;
