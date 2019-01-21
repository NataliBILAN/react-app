import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  entities: entitiesReducer,
});
