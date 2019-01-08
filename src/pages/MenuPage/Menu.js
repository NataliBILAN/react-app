import React from 'react';
import AllDishesContainer from '../../modules/menu/AllDishesContainer';
import s from './Menu.module.css';

const MenuPage = () => (
  <div>
    <h2 className={s.title}>Our menu</h2>
    <AllDishesContainer />
  </div>
);
export default MenuPage;
