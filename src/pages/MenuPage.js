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

    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const items = await API.getAllMenuItems();
      this.setState({ menu: items, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
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
    if (nextCategory === undefined) {
      this.fetchItems(nextCategory);
    }
  }

  fetchItems = async category => {
    try {
      const items = await API.getAllMenuItems(category);
      this.setState({ menu: items, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  onClearFilter = () => {
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
    // this.setState({ category: category.value });
  };

  handleAddNewDish = dish => {
    API.addNewDish(dish).then(newDish => {
      this.setState(prevState => ({
        menu: [...prevState.menu, newDish],
      }));
    });
  };

  render() {
    const { menu, loading, error } = this.state;
    const { match } = this.props;
    const currentValue = getCategoryFromProps(this.props);
    console.log(currentValue);
    console.log(menu);
    return (
      <>
        <h2>Our menu</h2>
        <CategorySelector
          value={currentValue}
          onChange={this.onCategoryChange}
        />
        {currentValue === undefined ? null : (
          <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        )}

        <AddNewDish />
        <AllDishes menu={menu} match={match} />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error!</h1>}
      </>
    );
  }
}
