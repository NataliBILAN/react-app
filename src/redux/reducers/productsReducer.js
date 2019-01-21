import { actionTypes } from '../actions';

export default function productsReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_SUCCESS:
      return payload.ids.posts;

    default:
      return state;
  }
}
