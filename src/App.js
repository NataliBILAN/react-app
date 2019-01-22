import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products/ProductsListContainer';
import Cart from './components/Cart/CartContainer';
import Navigation from './components/Navigation';
import CartLink from './components/CartLink/CartLinkContainer';

const wrapperStyle = {
  padding: '24px',
  width: '1200px',
  margin: '0 auto',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
};

const App = () => (
  <div style={wrapperStyle}>
    <Navigation />
    <CartLink />
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </div>
);
export default App;
