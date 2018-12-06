import React, { Component } from 'react';
import * as API from '../services/api';
import OrderHistoryList from './OrderHistoryList';
import OrderModal from './OrderModal';
import AddOrder from './AddOrder';
import OrderModalContent from './OrderModalContent';
import Spinner from './Spinner';

class App extends Component {
  state = {
    orders: [],
    selected: null,
    isLoading: false,
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
    this.setState({ isLoading: true });
    API.getOrdersById(id).then(order => {
      // console.log(order);
      this.setState({
        selected: order,
        isLoading: false,
      });
    });
    this.openModal();
  };

  handleAddNewOrder = item => {
    API.addNewOrder(item).then(newItem => {
      this.setState(prevState => ({
        orders: [...prevState.orders, newItem],
      }));
    });
  };

  openModal = () => {
    this.setState({
      selected: true,
    });
  };

  closeModal = () => {
    this.setState({
      selected: null,
    });
  };

  render() {
    const { orders, selected, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Spinner />}
        {selected && (
          <OrderModal onClose={this.closeModal} orderHistory={orders}>
            <OrderModalContent selectedItem={selected} />
          </OrderModal>
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
