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

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: types.FETCH_SUCCESS,
  payload: notes,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addNote,
  deleteNote,
  toggleNote,
  filter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
