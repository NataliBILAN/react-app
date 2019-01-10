import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import AllDishes from './AllDishesView';

import CategorySelector from './CategorySelector';
import * as API from '../../services/api';
import CurrentFilter from './CurrentFilter';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

// Передаем значение value, то что в урле храним
// и ищем обьект с таким value
const findCurrentOption = (options, value) =>
  options.find(option => option.value === value);

class AllDishesContainer extends Component {
  state = {
    menu: [],
    categories: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const items = await API.getAllMenuItems();
      const allCategories = await API.getCategories();
      this.setState({ menu: items, categories: allCategories, loading: false });
      console.log(this.state);
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
    // reset???
  };

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category.value}`,
    });
  };

  handleAddNewDish = dish => {
    API.addNewDish(dish).then(newDish => {
      this.setState(prevState => ({
        menu: [...prevState.menu, newDish],
      }));
    });
  };

  render() {
    const { menu, categories, loading, error } = this.state;
    const { match } = this.props;
    const options = categories.map(category => ({
      value: category.name,
      label: category.name,
    }));
    const currentValue = getCategoryFromProps(this.props);
    console.log(currentValue);
    const currentOption = findCurrentOption(options, currentValue);
    console.log(currentOption);

    return (
      <>
        <CategorySelector
          options={options}
          value={currentOption}
          onChange={this.handleCategoryChange}
        />
        {currentValue === undefined ? null : (
          <CurrentFilter category={currentValue} onClear={this.onClearFilter} />
        )}

        <AllDishes menu={menu} match={match} />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error!</h1>}
      </>
    );
  }
}
export default withRouter(AllDishesContainer);
