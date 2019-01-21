import { normalize } from 'normalizr';
import ProductsSchema from './schema/index';

export const actionTypes = {
  FETCH_REQUEST: 'products/FETCH_REQUEST',
  FETCH_SUCCESS: 'products/FETCH_SUCCESS',
  FETCH_ERROR: 'products/FETCH_ERROR',
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
};

export const fetchRequest = () => ({
  type: actionTypes.FETCH_REQUEST,
});

// export const fetchSuccess = products => ({
//   type: actionTypes.FETCH_SUCCESS,
//   payload: products,
// });
export const fetchSuccess = products => {
  const normalizedProducts = normalize(products, [ProductsSchema]);

  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: {
      ids: {
        products: Object.keys(normalizedProducts.entities.products),
      },
      entities: normalizedProducts.entities,
    },
  };
};

export const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: error,
});
// export default { fetchRequest, fetchSuccess, fetchError };

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});
