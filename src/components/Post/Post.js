import React from 'react';

const Post = ({ title, image, body }) => (
  <div>
    <p>Title: {title}</p>
    <p>{image}</p>
    <p>{body}</p>
  </div>
);
export default Post;
