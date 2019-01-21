import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../redux/reducers';

const middleWare = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middleWare);
const store = createStore(rootReducer, enhancer);
export default store;
