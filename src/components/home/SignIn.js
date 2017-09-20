import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

      this.onSubmitForm = this.onSubmitForm.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
    }


  onSubmitForm(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/userAuth/register',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      success: (data) => {
        // eslint-disable-next-line
        console.log(data);
      }
    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }



  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <FormControl onChange={this.onInputChange} type="text" placeholder="username" name="username" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="password" name="password" />
        <Button className="submit" type="submit">Submit</Button>
      </form>
    );
  }
};

export default SignIn;
