import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});

export const addPost = createActions({
    addPostRequest: (payload) => payload,
    addPostSuccess: (payload) => payload,
    addPostFailure: (err) => err,
});

export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
});

export const deletePost = createActions({
    deletePostRequest: (payload) => payload,
    deletePostSuccess: (payload) => payload,
    deletePostFailure: (err) => err,
});

export const filterSearch = createAction('SEARCH_FILTER_CHANGE');
