import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import s from './PostsList.module.css';

const PostsList = ({ posts = [], match }) => (
  <ul className={s.list}>
    {posts.map(post => (
      <li key={post.id} className={s.list_item}>
        <Link to={`${match.url}/${post.id}`}>
          <Post title={post.title} text={post.body} />
        </Link>
      </li>
    ))}
  </ul>
);
export default PostsList;
