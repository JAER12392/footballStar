import React from 'react';
import LoggedInHeader from '../userhomepage/LoggedInHeader.js';
import TitleIntro from './TitleIntro.js';
import BodyAncedote from './BodyAncedote.js';
import AboutContainer from './AboutContainer.js';

class AncedotePage extends React.Component {
  render() {
    return (
        <div>
            <div>
            <LoggedInHeader />
            </div>
            <div id="title-intoduction">
                <TitleIntro />
            </div>
            <div className="body-ancedote">
                <BodyAncedote />
            </div>
            <div className="about-container">
                <AboutContainer />
            </div>

        </div>
      );

  }
}

export default AncedotePage;
