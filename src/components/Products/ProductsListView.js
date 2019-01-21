import React from 'react';

const ProductsListView = ({ products = [], addToCart }) =>
  products.length > 0 ? (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          <p>
            <b>Name: </b>
            {item.name}
          </p>
          <p>Price: {item.price}</p>
          <button type="button" onClick={() => addToCart(item.id)}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  ) : null;

export default ProductsListView;
