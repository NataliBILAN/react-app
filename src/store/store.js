import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootModule from '../modules/rootModule';

const logger = createLogger();
const middleWares = applyMiddleware(logger, thunk);

const enhancer = composeWithDevTools(middleWares);
const store = createStore(rootModule, enhancer);
export default store;
