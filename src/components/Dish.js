import React, { Fragment } from 'react';

const Dish = ({ name, description, image, price, ingredients }) => (
  <Fragment>
    <img src={image} alt={name} width="200" />
    <p>{name}</p>
    <p>{description}</p>
    <p>Price: {price}</p>
    <p>Ingredients: {ingredients}</p>
  </Fragment>
);

export default Dish;
