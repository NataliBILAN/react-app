import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AllPostPage from './pages/AllPostPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

const wrapperStyle = {
  padding: '24px',
  width: '1200px',
  margin: '0 auto',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
};

const App = () => (
  <div style={wrapperStyle}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/posts" component={AllPostPage} />
      <Route path="/posts/:id" component={PostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
export default App;
