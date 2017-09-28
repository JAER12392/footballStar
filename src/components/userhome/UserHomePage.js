import React from 'react';
import MainCard from './MainCard.js';

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
            <MainCard />
          </div>
          </div>
      );
  }
}


export default UserHomePage;
