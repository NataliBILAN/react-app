import React, { Fragment } from 'react';

const Dish = ({ name, description, image, price }) => (
  <Fragment>
    <img src={image} alt={name} width="200" />
    <p>{name}</p>
    <p>{description}</p>
    <p>Price: {price}</p>
  </Fragment>
);

export default Dish;
