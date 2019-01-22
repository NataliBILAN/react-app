import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Products</Link>
    </li>
    {/* <li>
      <Link to="/cart">Cart</Link>
    </li> */}
  </ul>
);
export default Navigation;
