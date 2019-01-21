import { createSelector } from 'reselect';

const getAuthorIds = state => state.authors.ids;

export const getSelectedAuthorId = state => state.authors.selectedId;

const getAurhorEntities = state => state.entities.authors;

export const getAllAuthors = createSelector(
  [getAuthorIds, getAurhorEntities],
  (ids, entities) => ids.map(id => entities[id]),
);
const getPostIds = state => state.posts;
const getPostEntities = state => state.entities.posts;

export const getAllPosts = state => {
  const ids = getPostIds(state);
  const ents = getPostEntities(state);
  return ids.map(id => ents[id]);
};

export const getPostsWithAuthor = state => {
  const authorId = getSelectedAuthorId(state);
  const postIds = getPostIds(state);
  const entities = getPostEntities(state);

  // const posts = [];

  // postIds.forEach(postId => {
  //     const post = entities[postId];

  // if (post.author === authorId) {
  //     posts.push(post);
  // }
  // });

  return postIds.reduce((acc, postId) => {
    const post = entities[postId];

    if (post.author === authorId) {
      acc.push(post);
    }

    return acc;
  }, []);
};
