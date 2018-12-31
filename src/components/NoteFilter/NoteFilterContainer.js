import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';
import { notesAction, notesSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  value: notesSelectors.getFilter(state),
});
const mapDispatchToProps = {
  onChange: notesAction.filter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
