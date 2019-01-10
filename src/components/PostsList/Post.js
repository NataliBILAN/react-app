import React from 'react';
import s from './Post.module.css';

const Post = ({ title, text }) => (
  <div className={s.post}>
    <h3 className={s.title}>
      What we discuss: <span className={s.subtitle}>{title}</span>
    </h3>
    <p className={s.article}>{text}</p>
  </div>
);
export default Post;
