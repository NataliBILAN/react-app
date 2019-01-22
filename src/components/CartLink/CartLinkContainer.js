import { connect } from 'react-redux';
import CartLinkView from './CartLinkView';
import { getCartProductsAmount } from '../../redux/selectors';

const mstp = state => ({
  amount: getCartProductsAmount(state),
});

export default connect(
  mstp,
  null,
)(CartLinkView);
