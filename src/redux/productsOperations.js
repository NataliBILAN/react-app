import axios from 'axios';
import * as actions from './actions';

export const fetchProducts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3000/menu');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
// export default fetchProducts;
