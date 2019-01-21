import React from 'react';

const AuthorListView = ({ authors }) =>
  authors.length > 0 ? (
    <ul>
      {authors.map(author => (
        <li key={author.id}>
          <img src={author.image} alt="authors name" width="400" />
          <p>{author.name}</p>
        </li>
      ))}
    </ul>
  ) : null;
export default AuthorListView;
