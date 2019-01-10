import React from 'react';
import s from './PostFilter.module.css';

const PostsFilter = ({ value = '', onChange = () => null }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search in title"
    className={s.search}
  />
);
export default PostsFilter;
