import React from 'react';
import Header from './header.js';
import SessionSignUp from './sessionSignUp.js';
import IntroText from './introText.js';
import PDisplay from './parrallax.js';





class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <div id="content-div">
            <IntroText />
            <div id="inner-content">
              <p>Sign Up for Free</p>
              <SessionSignUp />
            </div>
           </div>
         <PDisplay />
         <p id="second-quote">Put your heart, mind, and soul into even your smallest acts. This is the secret of success.</p>
         <footer>
           <ul>
            <li><a href="https://www.linkedin.com/in/jesus-alberto-esquivel-ramos-zeus-36a5ab120/" target="blank">LinkedIn</a></li>
            <li><a href="https://github.com/JAER12392" target="blank">Github</a></li>
            <li><a href="https://www.facebook.com/jesus.esquivel.92" target="blank">Facebook</a></li>
         </ul>
         </footer>
      </div>
      );
  }

}

export default MainPage;
