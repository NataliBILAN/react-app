import { connect } from 'react-redux';
import CommentEditor from './CommentEditor';
import postsOperations from '../../modules/posts/postsOperations';

const mapDispatchToProps = { addComment: postsOperations.addComment };

export default connect(
  null,
  mapDispatchToProps,
)(CommentEditor);
