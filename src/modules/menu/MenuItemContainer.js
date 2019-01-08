import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as API from '../../services/api';
import MenuItemView from './MenuItemView';

class MenuItemContainer extends Component {
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
    const {
      name,
      description,
      image,
      price,
      ingredients,
      category,
    } = this.state;
    return (
      <div>
        <MenuItemView
          image={image}
          name={name}
          description={description}
          ingredients={ingredients}
          category={category}
          price={price}
        />
        <button type="button" onClick={this.handleGoBack}>
          Назад к меню
        </button>
      </div>
    );
  }
}
export default withRouter(MenuItemContainer);
