import React from 'react';

const PostItem = ({ item = {}, deleteComment, addComment, match }) => (
  <article>
    <h3>ID: {match.params.id}</h3>
    <p>What we discuss:{item.title}</p>
    <p>{item.body}</p>
    <button type="button" onClick={addComment}>
      Add comment
    </button>
    <button type="button" onClick={deleteComment}>
      Delete comment
    </button>
  </article>
);
export default PostItem;
