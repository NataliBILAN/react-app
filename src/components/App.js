import React, { Component } from 'react';
import v4 from 'uuid/v4';
import Logo from './Logo';
import Nav from './Nav';
import UserMenu from './UserMenu';
import SignInForm from './SignInForm';
import SingUpForm from './SingUpForm';
import OrderHistoryList from './OrderHistoryList';
import orderHistory from '../order-history.json';
import DishesList from './DishesList';
import DishFilter from './DishFilter';
import menu from '../menu.json';
import Comments from './Comments';
import CommentList from './CommentList';

const findDish = filter =>
  menu.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

class App extends Component {
  state = {
    filter: '',
    comments: [],
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleAddComments = (text, rate) => {
    this.setState(prevState => ({
      comments: [
        {
          id: v4(),
          text,
          rate,
        },
        ...prevState.comments,
      ],
    }));
  };

  render() {
    const { filter, comments } = this.state;
    const filteredMenu = findDish(filter, menu);

    return (
      <div>
        <header>
          <Logo />
          <Nav />
          <UserMenu UserName="Homer Simpson" />
        </header>{' '}
        <h2> Sing in </h2> <SignInForm />
        <hr />
        <h2> Sing up </h2> <SingUpForm />
        <hr />
        <OrderHistoryList orderHistory={orderHistory} /> <hr />
        <DishFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
        />{' '}
        <DishesList menu={filteredMenu} /> <hr />
        <Comments onSubmit={this.handleAddComments} />{' '}
        <CommentList comments={comments} />{' '}
      </div>
    );
  }
}

export default App;
