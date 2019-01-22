import { connect } from 'react-redux';
import CartView from './CartView';
import { getCartProducts } from '../../redux/selectors';
import { removeFromCart } from '../../redux/actions';

const mstp = state => ({
  products: getCartProducts(state),
});
const mdtp = { removeFromCart };

export default connect(
  mstp,
  mdtp,
)(CartView);
