import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

class SessionSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: []
    };
   this.onInputChange = this.onInputChange.bind(this);
   this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onSubmitChange(e) {
    e.preventDefault();
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
    <div>
    <form onSubmitChange={this.onSubmitChange}>
      <FormControl onChange={this.onInputChange} type="text" placeholder="email" name="email" />
      <FormControl onChange={this.onInputChange} type="text" placeholder="password" name="password" />
      <Button className="submit" type="submit">Sign Up for Free</Button>
    </form>
    </div>
    );
  }

}

export default SessionSignUp;
