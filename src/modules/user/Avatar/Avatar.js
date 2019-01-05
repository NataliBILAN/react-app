import React from 'react';
import s from './Avatar.module.css';

const Avatar = ({ image }) => (
  <div className={s.avatar}>
    <img src={image} alt="user avatar" className={s.avatar_img} />
  </div>
);
export default Avatar;
