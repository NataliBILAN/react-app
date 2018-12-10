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
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeStyle={styles.activeLink}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={styles.activeLink}>
        About
      </NavLink>
    </li>
  </ul>
);
export default Nav;
