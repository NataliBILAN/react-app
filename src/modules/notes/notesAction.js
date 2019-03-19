// import shortid from 'shortid';
import types from './notesActionTypes';

// const addNote = text => ({
//   type: types.ADD,
//   payload: { id: shortid.generate(), text, completed: false },
// });
// Это добавление заметки синхронно, без сохранения на сервере

// const deleteNote = id => ({
//   type: types.DELETE,
//   payload: id,
// });
const orderList = result => ({
  type: types.REORDER_LIST,
  payload: result,
});
const addSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});

const deleteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED_SUCCESS,
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
  addSuccess,
  deleteSuccess,
  toggleNote,
  filter,
  fetchRequest,
  fetchSuccess,
  fetchError,
  orderList,
};
