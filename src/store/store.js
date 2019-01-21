import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReduser from '../redux/redusers/index';

const enhancer = composeWithDevTools();
const store = createStore(rootReduser, enhancer);
export default store;
