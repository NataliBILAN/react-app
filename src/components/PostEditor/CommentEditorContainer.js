import { connect } from 'react-redux';
import PostEditor from './CommentEditor';
import postsOperations from '../../modules/posts/postsOperations';

const mapDispatchToProps = { addComment: postsOperations.addComment };

export default connect(
  null,
  mapDispatchToProps,
)(PostEditor);
