import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import MenuPage from '../pages/MenuPage';
import DishPage from '../pages/DishPage';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu/:id" component={DishPage} />
      <Route path="/menu" component={MenuPage} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);
export default App;
