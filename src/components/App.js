import React, {PropTypes} from 'react';
import LoginPage from './home/LoginPage.js';

class App extends React.Component {
  render() {
    return (
    <div>
      <p>Football Your Way! </p>
      <LoginPage />
      </div>
    );
  }
}

export default App;
