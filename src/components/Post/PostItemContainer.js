import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostItem from './PostItem';
import { postsOperations, postsSelectors } from '../../modules/posts';

class PostItemContainer extends Component {
  componentDidMount() {
    this.props.fetchPostsByID();
  }

  render() {
    return <PostItem {...this.props} />;
  }
}
const mapStateToProps = state => ({
  posts: postsSelectors.getFilteredPosts(state),
});
const mapDispatchToProps = {
  // fetchPosts: postsOperations.fetchPostsByID,
  deleteComment: postsOperations.deleteComment,
  // updateComment
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostItemContainer),
);
