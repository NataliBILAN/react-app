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
    categories: [],
  };

  componentDidMount() {
    API.getAllMenuItems().then(items => this.setState({ menu: items }));
    API.getCategories().then(items => this.setState({ categories: items }));
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
    this.fetchCategory(nextCategory);
  }

  fetchCategory = category => {
    API.getCategories(category).then(menu => this.setState({ menu }));
  };

  onClearFilter = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
    API.getAllMenuItems().then(items => this.setState({ menu: items }));
  };

  onCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { menu, categories } = this.state;
    const { match } = this.props;
    const currentValue = getCategoryFromProps(this.props);
    return (
      <>
        <h2>Our menu</h2>
        <CategorySelector
          options={categories}
          value={currentValue}
          onChange={this.onCategoryChange}
        />
        <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        <AddNewDish />
        <AllDishes menu={menu} match={match} />
      </>
    );
  }
}
