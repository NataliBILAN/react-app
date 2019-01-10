import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { postsSelectors, postsOperations } from '../../modules/posts';

class PostsListContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <PostsList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  posts: postsSelectors.getFilteredPosts(state),
});
const mapDispatchToProps = {
  fetchPosts: postsOperations.fetchPosts,
  deleteComment: postsOperations.deleteComment,
  // updateComment
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostsListContainer),
);
