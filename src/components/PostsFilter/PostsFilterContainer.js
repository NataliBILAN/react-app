import { connect } from 'react-redux';
import PostsFilter from './PostFilter';
import { postsAction, postsSelectors } from '../../modules/posts';

const mapStateToProps = state => ({
  value: postsSelectors.getFilter(state),
});
const mapDispatchToProps = {
  onChange: postsAction.filter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsFilter);
