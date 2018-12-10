import React, { Component } from 'react';

import * as api from '../api/api';
import ArticlesList from '../components/ArticlesList';

export default class ArticlesPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h2>Articles</h2>
        <ArticlesList articles={articles} match={match} />
      </div>
    );
  }
}
