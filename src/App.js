// import React from 'react';
// import PostList from './components/PostList/PostListContainer';
// import AuthorList from './components/AuthorList/AuthorListContainer';

// const App = () => (
//   <>
//     <h2>Create your goals</h2>
//     <PostList />
//     <AuthorList />
//   </>
// );
// export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './components/PostList/PostListContainer';
import { fetchPosts } from './redux/actions';

import posts from './posts.json';
// import AuthorList from './components/AuthorList/AuthorListContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts(posts);
  }

  render() {
    return (
      <>
        {/* <AuthorList /> */}
        <h2>Hello</h2>
        <PostList />
      </>
    );
  }
}

export default connect(
  null,
  { fetchPosts },
)(App);
