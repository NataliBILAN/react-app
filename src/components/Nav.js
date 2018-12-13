import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: 'green',
  },
};
const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" activeStyle={styles.activeLink} exact>
        Главная
      </NavLink>
    </li>
    <li>
      <NavLink to="/menu" activeStyle={styles.activeLink}>
        Меню
      </NavLink>
    </li>
  </ul>
);
export default Nav;
