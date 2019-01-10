const getItems = state => state.posts.items;

const getFilter = state => state.posts.filter;

// const getPostById = state => {
//   const items = getItems(state);
//   return items.find(item => item.id === id);
// };

const getFilteredPosts = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();
  return items.filter(item => item.title.toLowerCase().includes(filter));
};

export default {
  getItems,
  getFilter,
  getFilteredPosts,
  // getPostById,
};
