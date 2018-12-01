import React, { Component } from 'react';
import * as API from '../services/api';
import OrderHistoryList from './OrderHistoryList';

class App extends Component {
  state = {
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

  // openModal = () => {
  //   this.setState({
  //     isModalOpen: true,
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     isModalOpen: false,
  //   });
  // };

  render() {
    const { orders } = this.state;

    return (
      <div>
        {/* <Header />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />} */}

        <h2>Orders history</h2>
        <OrderHistoryList
          orderHistory={orders}
          onDelete={this.handleDeleteOrder}
          onShowMoreInfo={this.handleMoreInfo}
        />
      </div>
    );
  }
}

export default App;
