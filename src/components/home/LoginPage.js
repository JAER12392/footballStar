import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';


class LoginPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    onSignIn: false,
    onSignUp: false

  }
  this.onSignIn= this.onSignIn.bind(this);
  this.onSignUp= this.onSignUp.bind(this);
}

onSignIn() {
  this.setState({
    onSignIn: !this.state.onSignIn
  });
}

onSignUp() {
  this.setState({
    onSignUp: !this.state.onSignUp
  });
}

   render() {
     return (
       <div className="buttons">
        <div style={{maxWidth: 400, margin: '0 auto 10px'}}>
          <Button onClick={this.onSignIn} bsStyle="primary" bsSize="large" block>Sign In</Button>
          <Collapse in={this.state.onSignIn}>
            <div>
             <SignIn />
            </div>
          </Collapse>
          <Button onClick={this.onSignUp} bsSize="large" block>Sign Up</Button>
          <Collapse in={this.state.onSignUp}>
            <div>
               <SignUp />
            </div>
          </Collapse>
       </div>
       </div>
     );
  }
}

export default LoginPage;
