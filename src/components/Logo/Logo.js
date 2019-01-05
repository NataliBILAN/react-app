import React from 'react';
import s from './Logo.module.css';

const Logo = ({ img }) => (
  <div className={s.logo}>
    <img className={s.logo_img} src={img} alt="app logo" />
  </div>
);
export default Logo;
