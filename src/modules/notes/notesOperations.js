import axios from 'axios';
import actions from './notesAction';

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:4040/notes');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
export default { fetchNotes };
