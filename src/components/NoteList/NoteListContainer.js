import { connect } from 'react-redux';
import NoteList from './NoteList';
import { notesAction, notesSelectors } from '../../modules/notes';
// import { getItems } from '../../modules/notes/notesSelectors';

const mapStateToProps = state => ({
  notes: notesSelectors.getFilteredNotes(state),
});
const mapDispatchToProps = {
  deleteNote: notesAction.deleteNote,
  toggleNote: notesAction.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
