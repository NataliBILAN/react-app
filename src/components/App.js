import React, { Component } from 'react';
import v4 from 'uuid/v4';
import * as API from '../services/api';
import SignInForm from './SignInForm';
import SingUpForm from './SingUpForm';
import OrderHistoryList from './OrderHistoryList';
// import orderHistory from '../order-history.json';
import DishesList from './DishesList';
import DishFilter from './DishFilter';
import menu from '../menu.json';
import Comments from './Comments';
import CommentList from './CommentList';
import Header from './Header';
import Modal from './Modal';

const findDish = filter =>
  menu.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

class App extends Component {
  state = {
    filter: '',
    comments: [],
    isModalOpen: false,
    orders: [],
  };

  componentDidMount() {
    API.getAllOrders().then(orders => {
      this.setState({ orders });
    });
  }

  handleDeleteOrder = id => {
    API.deleteOrder(id).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        orders: state.orders.filter(order => order.id !== id),
      }));
    });
  };

  handleMoreInfo = id => {
    API.getOrdersById(id);
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

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { filter, comments, isModalOpen, orders } = this.state;
    const filteredMenu = findDish(filter, menu);

    return (
      <div>
        <Header />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />}
        <h2> Sing in </h2> <SignInForm />
        <hr />
        <h2> Sing up </h2> <SingUpForm />
        <hr />
        <h2>Orders history</h2>
        <OrderHistoryList
          orderHistory={orders}
          onDelete={this.handleDeleteOrder}
          onShowMoreInfo={this.handleMoreInfo}
        />
        <hr />
        <DishFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <DishesList menu={filteredMenu} /> <hr />
        <Comments onSubmit={this.handleAddComments} />
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default App;
