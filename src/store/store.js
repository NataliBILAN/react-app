import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootModule from '../modules/rootModule';

const middleWare = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middleWare);
const store = createStore(rootModule, enhancer);
export default store;
