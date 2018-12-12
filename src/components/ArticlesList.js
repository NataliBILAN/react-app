import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticlesList = ({ articles, match, location }) => (
  <>
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <Link
            to={{
              pathname: `${match.url}/${article.id}`,
              state: { from: location },
            }}
          >
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);
export default withRouter(ArticlesList);
