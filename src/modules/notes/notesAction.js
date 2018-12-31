import shortid from 'shortid';
import types from './notesActionTypes';

const addNote = text => ({
  type: types.ADD,
  payload: { id: shortid.generate(), text, completed: false },
});

const deleteNote = id => ({
  type: types.DELETE,
  payload: id,
});

const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id,
});

const filter = search => ({
  type: types.CHANGE_FILTER,
  payload: search,
});

export default { addNote, deleteNote, toggleNote, filter };
