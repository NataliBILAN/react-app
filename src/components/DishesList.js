import React from 'react';
import Dish from './Dish';

const DishesList = ({ menu }) => (
  <div>
    <h2>Our menu</h2>
    <ul>
      {menu.map(menuItem => (
        <li key={menuItem.id}>
          <Dish
            image={menuItem.image}
            alt={menuItem.name}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            ingredients={menuItem.ingredients}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default DishesList;
