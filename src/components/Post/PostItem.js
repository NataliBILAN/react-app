import React from 'react';

const PostItem = ({ title, body, deleteComment, addComment }) => (
  <article>
    <p>{title}</p>
    <p>{body}</p>
    <button type="button" onClick={addComment}>
      Add comment
    </button>
    <button type="button" onClick={deleteComment}>
      Delete comment
    </button>
  </article>
);
export default PostItem;
