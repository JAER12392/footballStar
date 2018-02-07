import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import FaFutbol from 'react-icons/lib/fa/futbol-o';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-background">
          <hr></hr>
          <div className="login-box">
            <h1>FootballStar</h1>
            <h4>Sign In</h4>
            <div id="icon-3" style={{color: 'red'}}>
              <FaFutbol size={60} />
              </div>
              <div className="form-box">
                   <form onSubmitChange={this.onSubmitChange}>
                     <FormControl onChange={this.onInputChange} type="text" placeholder="email" name="email" bsSize="large" />
                     <FormControl onChange={this.onInputChange} type="text" placeholder="password" name="password" bsSize="large" />
                     <Button className="submit" type="submit">Submit</Button>
                   </form>
                     <p>Don't have an account? </p>
                    <br />
                    <a>Create Account </a>
              </div>
          </div>
      </div>
      );
  }

}

export default LoginPage;
