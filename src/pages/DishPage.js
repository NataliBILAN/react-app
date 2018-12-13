import React, { Component } from 'react';
import * as API from '../api/api';

export default class DishPage extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    price: '',
    ingredients: '',
    category: '',
  };

  componentDidMount() {
    API.getMenuItemById(this.props.match.params.id).then(dish =>
      this.setState({
        ...dish,
      }),
    );
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;

    if (state) {
      return this.props.history.push(state.from);
    }

    this.props.history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  render() {
    const { name, description, image, price, ingredients } = this.state;
    return (
      <div>
        <img src={image} alt={name} width="200" />
        <p>{name}</p>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Ingredients: {ingredients}</p>
        <button type="button" onClick={this.handleGoBack}>
          Назад к меню
        </button>
      </div>
    );
  }
}
