import React from 'react';

import PostsList from '../components/PostsList';
import PostsFilter from '../components/PostsFilter';

const AllPostsPage = () => (
  <div>
    <PostsFilter />
    <PostsList />
  </div>
);
export default AllPostsPage;
