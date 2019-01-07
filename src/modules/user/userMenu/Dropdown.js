import React from 'react';
import { Link } from 'react-router-dom';
import userNav from '../../../configs/user-nav';

const Dropdown = () => (
  <div>
    <ul>
      {userNav.map(item => (
        <li key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
