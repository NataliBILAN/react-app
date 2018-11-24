import React, { Component } from 'react';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
