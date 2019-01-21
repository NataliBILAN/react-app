import React from 'react';
import Post from '../Post/Post';

const PostListView = ({ posts }) =>
  posts.length > 0 ? (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post title={post.title} />
        </li>
      ))}
    </ul>
  ) : null;
export default PostListView;
