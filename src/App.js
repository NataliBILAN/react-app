import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './components/AppHeader/AppHeader';
import MenuPage from './pages/MenuPage/Menu';
import MenuItemPage from './pages/Dish';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import DeliveryPage from './pages/Delivery';
import AccountPage from './pages/Account';
import OrderHistoryPage from './pages/OrderHistory';
import PlannerPage from './pages/Planner';

import routes from './configs/routes';
import s from './App.module.css';

const App = () => (
  <div className={s.container}>
    <AppHeader />
    <Switch>
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route path={routes.CONTACT} component={ContactPage} />
      <Route path={routes.DELIVERY} component={DeliveryPage} />
      <Route path={routes.ACCOUNT} component={AccountPage} />
      <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
      <Route path={routes.PLANNER} component={PlannerPage} />
    </Switch>
  </div>
);

export default App;
