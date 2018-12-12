import React, { Component } from 'react';
import queryString from 'query-string';
import CategorySelector from '../components/CategorySelector';
import categories from '../api/categories';

import * as api from '../api/api';
import ArticlesList from '../components/ArticlesList';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    // api.fetchAllArticles().then(articles => this.setState({ articles }));
    const category = getCategoryFromProps(this.props);

    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: `category=all`,
      });
    }
    this.fetchArticles(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    console.log('prevCategory: ', prevCategory);
    console.log('nextCategory: ', nextCategory);

    if (prevCategory === nextCategory) return;
    this.fetchArticles(nextCategory);
  }

  fetchArticles = category => {
    api
      .fetchArticlesByCategory(category)
      .then(articles => this.setState({ articles }));
  };

  onCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { articles } = this.state;
    const { match } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        <h2>Articles</h2>
        <CategorySelector
          options={categories}
          onChange={this.onCategoryChange}
          value={currentCategory}
        />
        <ArticlesList articles={articles} match={match} />
      </div>
    );
  }
}
