import React from 'react';
import s from './Navigation.module.css';

const Navigation = ({ items = [] }) => (
  <ul className={s.nav}>
    {items.map(item => (
      <li key={item.name} className={s.nav_item}>
        {item.name}
      </li>
    ))}
  </ul>
);
export default Navigation;
