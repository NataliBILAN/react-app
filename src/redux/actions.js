import { normalize } from 'normalizr';
import * as schemas from './schema/index';

export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  DELETE_POST: 'DELETE_POST',
  ADD_POST: 'ADD_POST',
  SELECT_AUTHOR: 'SELECT_AUTHOR',
};
export const fetchPosts = posts => {
  const normalizedPosts = normalize(posts, [schemas.PostSchema]);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: {
      ids: {
        posts: Object.keys(normalizedPosts.entities.posts),
        authors: Object.keys(normalizedPosts.entities.authors),
      },
      entities: normalizedPosts.entities,
    },
  };
};

// const fetchPost = posts => {
//   const normalizedPosts = normalize(posts, [schemas.PostSchema]);

//   return {
//     type: actionTypes.FETCH_POSTS,
//     payload: {
//       ids: {
//         posts: Object.keys(normalizedPosts.entities.posts),
//         authors: Object.keys(normalizedPosts.entities.authors),
//       },
//       entities: normalizedPosts.entities,
//     },
//   };
// };

// const fetchPost = posts => ({
//   type: actionTypes.FETCH_POSTS,
//   payload: posts,
// });
const deletePost = id => ({
  type: actionTypes.DELETE_POST,
  payload: id,
});
const selectAuthor = id => ({
  type: 'SELECT_AUTHOR',
  payload: id,
});
export default { fetchPosts, deletePost, selectAuthor };
