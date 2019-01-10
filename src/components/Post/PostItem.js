import React from 'react';

const PostItem = ({ title, body }) => (
  <div>
    <p>{title}</p>
    <p>{body}</p>
    <button type="button">Add comment</button>
  </div>
);
export default PostItem;
