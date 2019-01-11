import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostItem from './PostItem';
import { postsOperations } from '../../modules/posts';

class PostItemContainer extends Component {
  componentDidMount() {
    this.props.fetchPostsByID();
  }

  render() {
    return <PostItem {...this.props} />;
  }
}
const mapStateToProps = (state, ownProps) => ({
  item: state.items.find(item => item.id === Number(ownProps.params.id)),
});
// const mapStateToProps = state => ({
//   posts: postsSelectors.getPostById(state),
// });
const mapDispatchToProps = {
  fetchPostsByID: postsOperations.fetchPostsByID,
  deleteComment: postsOperations.deleteComment,
  addComment: postsOperations.addComment,
  // updateComment
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostItemContainer),
);
