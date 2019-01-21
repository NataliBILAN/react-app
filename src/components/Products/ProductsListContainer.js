import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsListView from './ProductsListView';
import { fetchProducts } from '../../redux/productsOperations';
// import { getProducts } from '../../redux/selectors';

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <ProductsListView products={this.props.products} />;
  }
}

// const mstp = state => ({
//   products: getProducts(state),
// });
const mdtp = {
  fetchProducts,
};

export default connect(
  null,
  mdtp,
)(ProductsListContainer);
