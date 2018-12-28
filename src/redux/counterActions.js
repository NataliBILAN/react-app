import types from './actionTypes';

const increment = () => ({
  type: types.INCREMENT,
  payload: 20,
});

const decrement = () => ({
  type: types.DECREMENT,
  payload: 20,
});

const reset = () => ({
  type: types.RESET,
});

const changeStep = step => ({
  type: types.CHANGE_STEP,
  payload: step,
});

export { increment, decrement, reset, changeStep };
