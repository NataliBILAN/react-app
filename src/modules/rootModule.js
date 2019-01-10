import { combineReducers } from 'redux';
import notesReducer from './posts/postsReducer';

export default combineReducers({
  posts: notesReducer,
});
