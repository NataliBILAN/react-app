import React, { Component } from 'react';
import queryString from 'query-string';
import AllDishes from '../components/AllDishes';

import CategorySelector from '../components/CategorySelector';
import * as API from '../api/api';
import CurrentFilter from '../components/CurrentFilter';
import AddNewDish from '../components/AddNewDish';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuPage extends Component {
  state = {
    menu: [],
    category: null,
  };

  componentDidMount() {
    API.getAllMenuItems().then(items => this.setState({ menu: items }));
    // API.getCategories().then(items => this.setState({ categories: items }));
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: ``,
      });
    }
    this.fetchCategory(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log('prevCategory: ', prevCategory);
    console.log('nextCategory: ', nextCategory);

    if (prevCategory === nextCategory) return;
    API.getMenuItemsWithCategory(nextCategory).then(menu =>
      this.setState({ menu }),
    );
  }

  fetchCategory = category => {
    API.getCategories(category).then(menu => this.setState({ menu }));
  };

  onClearFilter = () => {
    API.getAllMenuItems().then(menu => this.setState({ menu }));
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
  };

  onCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category.value}`,
    });
    this.setState({ category: category.value });
    console.log(category);
  };

  handleAddNewDish = dish => {
    API.addNewDish(dish).then(newDish => {
      this.setState(prevState => ({
        menu: [...prevState.menu, newDish],
      }));
    });
  };

  render() {
    const { menu, category } = this.state;
    const { match } = this.props;
    const currentValue = getCategoryFromProps(this.props);
    console.log(currentValue);
    console.log(menu);
    return (
      <>
        <h2>Our menu</h2>
        <CategorySelector value={category} onChange={this.onCategoryChange} />
        {currentValue === undefined ? null : (
          <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        )}

        <AddNewDish />
        <AllDishes menu={menu} match={match} />
      </>
    );
  }
}
