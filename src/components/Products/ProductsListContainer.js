import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsListView from './ProductsListView';
import { fetchProducts } from '../../redux/productsOperations';
import { getProducts } from '../../redux/selectors';
import { addToCart } from '../../redux/actions';

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <ProductsListView
        products={this.props.products}
        addToCart={this.props.addToCart}
      />
    );
  }
}
const mstp = state => ({
  products: getProducts(state),
});
const mdtp = {
  fetchProducts,
  addToCart,
};

export default connect(
  mstp,
  mdtp,
)(ProductsListContainer);
