export const LoadingState$ = (state) => state.posts.isLoading;

export const filterSearch$ = (state) => state.filters.search;

export const PostsState$ = (state) => state.posts.data;

// export const a$ = (state) => {
//     const searchText = (state) => state.filters.search;
//     const a = JSON.stringify(searchText);
//     const data = state.posts.data.filter((post) => {
//         return post.category.includes(a);
//     });
//     return data;
// };
