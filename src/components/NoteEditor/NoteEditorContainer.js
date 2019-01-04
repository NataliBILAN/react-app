import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import notesOperations from '../../modules/notes/notesOperations';

const mapDispatchToProps = { addNote: notesOperations.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
