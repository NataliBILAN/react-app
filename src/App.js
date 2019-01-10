import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllPostPage from './pages/AllPostPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import AppHeader from './components/AppHeader/AppHeader';

const wrapperStyle = {
  padding: '8px 24px',
  width: '1200px',
  margin: '0 auto',
};

const App = () => (
  <div style={wrapperStyle}>
    <AppHeader />
    <Switch>
      <Route path="/posts" component={AllPostPage} />
      <Route path="/posts/:id" component={PostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
export default App;
