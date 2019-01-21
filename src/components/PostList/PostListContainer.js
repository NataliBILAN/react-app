import { connect } from 'react-redux';
import PostListView from './PostListView';
import * as selectors from '../../redux/selectors';

const mapState = state => ({
  posts: selectors.getAllPosts(state),
});

export default connect(
  mapState,
  null,
)(PostListView);
