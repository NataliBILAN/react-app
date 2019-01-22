import React from 'react';
import { Link } from 'react-router-dom';

const CartLinkView = ({ amount }) => (
  <div>
    <Link to="/cart">
      <img
        src="./images/shopping-cart.svg"
        alt="cart"
        width="200"
        height="150"
      />
      <span>{amount}</span>
    </Link>
  </div>
);
export default CartLinkView;
