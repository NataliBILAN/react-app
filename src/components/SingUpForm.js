import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};
class SingUpForm extends Component {
  state = { ...INITIAL_STATE };

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

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, email, phone, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="phone"
          name="phone"
          value={phone}
          placeholder="Your phone"
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Confirm Your password"
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
export default SingUpForm;
