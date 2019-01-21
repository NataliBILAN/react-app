import { schema } from 'normalizr';
// import denormalizedPosts from '../../posts.json';

const AuthorsSchema = new schema.Entity('authors');
export const PostSchema = new schema.Entity('posts', {
  author: AuthorsSchema,
});
// const normalizedPosts = normalize(denormalizedPosts, [PostSchema]);
// console.log(normalizedPosts);
// export default PostSchema;
