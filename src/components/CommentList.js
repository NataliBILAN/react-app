import React from 'react';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(({ id, text, rate }) => (
      <li key={id}>
        <p>{text}</p>
        <p>Rate:{rate}</p>
      </li>
    ))}
  </ul>
);

export default CommentList;
