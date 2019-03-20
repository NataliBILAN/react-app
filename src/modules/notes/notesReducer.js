import { combineReducers } from 'redux';
import types from './notesActionTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_SUCCESS:
      return [...state, payload];

    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);

    case types.TOGGLE_COMPLETED_SUCCESS:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );

    case types.REORDER_LIST:
      // console.log(payload.destination.index); //куда
      // console.log(payload.source.index); //откуда

      if (!payload.destination) {
        return;
      }
      const result = Array.from(state);
      console.log(result);
      const [removed] = result.splice(payload.source.index, 1);
      // console.log([ removed ]);
      result.splice(payload.destination.index, 0, removed);
      return result;

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;
    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;
    case types.FETCH_ERROR:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: notesReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// делаем два редьюсера, чтобы получить такой state (1 часть(без асинхр.редакса))
// {
//   notes: {
//     items: [],
//       filter: '',
// }
// }

// Когда делаем асинхронные операции, то стэйт такой:
// {
//   notes: {
//     items: [],
//       filter: '',
//         loading: false,
//           error: null,
//   }
// }
