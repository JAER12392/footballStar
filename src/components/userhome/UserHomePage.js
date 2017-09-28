import React from 'react';
import VideoOne from './VideoOne.js';
import SubCardTwo from './SubCardTwo.js';


class UserHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

   // <div>
   // <MainCard />
   // </div>
   // <div>
   //   <SubCardOne />
   // </div>
   // <div>
   //   <SubCardTwo />
   // </div>
   // <div>
   //   <VideoOne />
   // </div>
   // <div>
   //   <VideoTwo />
   // </div>
   // <div>
   //   <BottomFooter />
   // </div>

  render() {
    return (
        <div>
          <div>
          <VideoOne />
          </div>
          <div>
          <SubCardTwo />
          </div>
          </div>
      );
  }
}


export default UserHomePage;
