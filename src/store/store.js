import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootModule from '../modules/rootModule';

const logger = createLogger();
const midldleWares = applyMiddleware(logger);

const enhancer = composeWithDevTools(midldleWares);
const store = createStore(rootModule, enhancer);
export default store;
