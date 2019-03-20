import axios from 'axios';
import actions from './notesAction';

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3000/notes');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = text => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.post('http://localhost:3000/notes', {
      text,
      completed: false,
    });
    dispatch(actions.addSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteNote = id => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    await axios.delete(`http://localhost:3000/notes/${id}`);
    dispatch(actions.deleteSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const toggleNoteSuccess = (id, item) => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    await axios.patch(`http://localhost:3000/notes/${id}`, {
      ...item,
      completed: !item.completed,
    });
    dispatch(actions.toggleNote(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const orderListSuccess = result => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    console.log(result);
    await axios.put('http://localhost:3000/notes', {
      ...result,
    });
    dispatch(actions.orderList(result));
  } catch (error) {
    dispatch(actions.fetchError(error), console.log(error));
  }
};
export default {
  fetchNotes,
  addNote,
  deleteNote,
  toggleNoteSuccess,
  orderListSuccess,
};
