import React, { Fragment } from 'react';

const MenuItemView = ({
  name,
  description,
  ingredients,
  category,
  image,
  price,
}) => (
  <Fragment>
    <img src={image} alt={name} width="400" />
    <p>{name}</p>
    <p>{description}</p>
    <p>Ингридиенты: {ingredients}</p>
    <p>Категория: {category}</p>
    <p>Цена: {price}</p>
  </Fragment>
);

export default MenuItemView;
