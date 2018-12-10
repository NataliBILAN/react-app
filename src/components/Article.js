import React from 'react';

const Article = ({ match }) => (
  <div>
    <h2>Article</h2>
    <p>Article ID:{match.params.id}</p>
  </div>
);
export default Article;
