import axios from 'axios';
import actions from './postsAction';

const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3000/posts');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchPostsByID = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    await axios.get(`http://localhost:3000/posts/${id}`);
    dispatch(actions.getById(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addComment = body => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.post('http://localhost:3000/comments', {
      body,
      postId: '',
    });
    dispatch(actions.addSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteComment = id => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    await axios.delete(`http://localhost:3000/comments/${id}`);
    dispatch(actions.deleteSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

// updateComment

export default { fetchPosts, fetchPostsByID, addComment, deleteComment };
