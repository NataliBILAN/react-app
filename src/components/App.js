import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import PageNotFound from '../pages/PageNotFound';
import ArticlesPage from '../pages/ArticlesPage';
import About from '../pages/About';
import Home from '../pages/Home';
import ArticlePage from '../pages/ArticlePage';

const App = () => (
  <>
    <h1>Basics of routing</h1>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/articles" component={ArticlesPage} />

      <Route path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);
export default App;
