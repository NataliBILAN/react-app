import React, { Component } from 'react';
import * as API from '../services/api';
import OrderHistoryList from './OrderHistoryList';
import OrderMoreInfo from './OrderMoreInfo';
import AddOrder from './AddOrder';

class App extends Component {
  state = {
    orders: [],
    isModalOpen: false,
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
    API.getOrdersById(id).then(order => {
      console.log(order);
    });
    this.openModal();
  };
  // isOk => {
  //   if (!isOk) return;
  //   this.setState(state => ({
  //     orders: state.orders.filter(order => order.id === id),
  //   }));

  handleAddNewOrder = item => {
    API.addNewOrder(item).then(newItem => {
      this.setState(prevState => ({
        orders: [...prevState.orders, newItem],
      }));
    });
    console.log(this.state);
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
    const { orders, isModalOpen } = this.state;

    return (
      <div>
        {isModalOpen && (
          <OrderMoreInfo onClose={this.closeModal} orderHistory={orders} />
        )}

        <h2>Orders history</h2>
        <OrderHistoryList
          orderHistory={orders}
          onDelete={this.handleDeleteOrder}
          onShowMoreInfo={this.handleMoreInfo}
        />
        <AddOrder onAddNewOrder={this.handleAddNewOrder} />
      </div>
    );
  }
}

export default App;
