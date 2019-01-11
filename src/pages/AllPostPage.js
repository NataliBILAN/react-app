import React from 'react';

import PostsList from '../components/PostsList';
import PostsFilter from '../components/PostsFilter';
import PostEditor from '../components/CommentEditor/CommentEditorContainer';
import AppHeader from '../components/AppHeader/AppHeader';

const AllPostsPage = () => (
  <div>
    <AppHeader />
    <PostsFilter />
    <PostsList />
    <PostEditor />
  </div>
);
export default AllPostsPage;
