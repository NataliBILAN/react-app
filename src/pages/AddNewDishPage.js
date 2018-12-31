import React, { Component } from 'react';
// import Select from 'react-select';

import CategorySelector from '../components/CategorySelector';

export default class AddNewDishPage extends Component {
  state = {
    image:
      'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    name: '',
    description: '',
    ingredients: '',
    category: '',
    price: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const newDish = {
      image: this.state.image,
      name: this.state.name,
      description: this.state.description,
      ingredients: this.state.ingredients,
      category: this.state.category.value,
      price: this.state.price,
    };
    console.log(newDish);
    // this.props.onAddNewDish(newDish); onAddNewDish={this.handleAddNewDish}
    this.onBack();
  };

  onBack = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: '/menu',
      search: ``,
    });
  };

  handleChooseCategory = category => {
    this.setState({ category });
  };

  render() {
    const { name, description, ingredients, price, category } = this.state;
    // const options = [
    //   { value: 'soup', label: 'soup' },
    //   { value: 'dessert', label: 'dessert' },
    //   { value: 'salad', label: 'salad' },
    //   { value: 'main course', label: 'main course' },
    // ];
    return (
      <>
        <h2>Добавить новое блюдо</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            placeholder="New dish"
            required
          />

          <input
            type="text"
            value={description}
            name="description"
            onChange={this.handleChange}
            placeholder="Description"
            required
          />

          <input
            type="text"
            value={ingredients}
            name="ingredients"
            onChange={this.handleChange}
            placeholder="Ingredients"
            required
          />

          <CategorySelector
            value={category}
            onChange={this.handleChooseCategory}
          />
          <input
            type="number"
            value={price}
            name="price"
            onChange={this.handleChange}
            placeholder="Price"
            required
          />
          <button type="submit">Add new dish</button>
        </form>
      </>
    );
  }
}
