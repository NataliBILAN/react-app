import React, { Component } from 'react';

export default class AddOrder extends Component {
  state = {
    address: '',
    price: '',
    rating: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const newItem = {
      date: Date.now(),
      price: this.state.price,
      address: this.state.address,
      rating: this.state.rating,
    };
    console.log(newItem);
    this.props.onAddNewOrder(newItem);
    this.reset();
  };

  reset = () => {
    this.setState({
      address: '',
      price: '',
      rating: '',
    });
  };

  render() {
    const { address, price, rating } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          value={address}
          name="address"
          onChange={this.handleChange}
          placeholder="Enter your address"
          required
        />
        <input
          type="number"
          value={price}
          name="price"
          onChange={this.handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          value={rating}
          name="rating"
          onChange={this.handleChange}
          placeholder="Rating"
          required
        />

        <button type="submit">Add new order</button>
      </form>
    );
  }
}
