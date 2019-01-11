// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostItem from './PostItem';
import { postsOperations, postsSelectors } from '../../modules/posts';

// class PostItemContainer extends Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   render() {
//     return <PostItem {...this.props} />;
//   }
// }

const mapStateToProps = (state, ownProps) => ({
  posts: postsSelectors.getPostById(state, ownProps),
});
const mapDispatchToProps = {
  // fetchPostsByID: postsOperations.fetchPostsByID,
  deleteComment: postsOperations.deleteComment,
  addComment: postsOperations.addComment,
  // updateComment
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostItem),
);
