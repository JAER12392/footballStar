import React from 'react';
import LoggedInHeader from '../userhomepage/LoggedInHeader.js';
import TitleIntro from './TitleIntro.js';
import BodyAncedote from './BodyAncedote.js';
import AboutContainer from './AboutContainer.js';

class AncedotePage extends React.Component {
  render() {
    return (
        <div>
            <hr className='hr' />
            <div className="header-ancedote">
                <LoggedInHeader />
            </div>
              <div className="front-page">
                    <TitleIntro />
                 <div id="imgz-container">
                    <AboutContainer />
                </div>
               </div>
        </div>
      );

  }
}

export default AncedotePage;
