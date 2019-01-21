import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import postReducer from './postReduser';
import authorsReducer from './authorsReducer';

export default combineReducers({
  posts: postReducer,
  authors: authorsReducer,
  entities: entitiesReducer,
});
