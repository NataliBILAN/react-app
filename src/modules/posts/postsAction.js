import types from './postsActionTypes';

const addSuccess = comment => ({
  type: types.ADD_SUCCESS,
  payload: comment,
});

const deleteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const updateSuccess = id => ({
  type: types.UPDATE_SUCCESS,
  payload: id,
});
// const getById = id => ({
//   type: types.GET_POST,
//   payload: id,
// });

const filter = search => ({
  type: types.CHANGE_FILTER,
  payload: search,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = posts => ({
  type: types.FETCH_SUCCESS,
  payload: posts,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addSuccess,
  deleteSuccess,
  updateSuccess,
  filter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
