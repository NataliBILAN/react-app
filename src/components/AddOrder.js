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

  render() {
    const { address, price, rating, onAddNewOrder } = this.state;

    return (
      <form onSubmit={onAddNewOrder}>
        <input
          type="text"
          value={address}
          name="address"
          onChange={this.handleChange}
          placeholder="Enter your address"
        />
        <input
          type="number"
          value={price}
          name="price"
          onChange={this.handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          value={rating}
          name="rating"
          onChange={this.handleChange}
          placeholder="Rating"
        />

        <button type="submit">Add new order</button>
      </form>
    );
  }
}
