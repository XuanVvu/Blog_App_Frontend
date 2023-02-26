import { call, put, takeLatest } from 'redux-saga/effects';
import { getPosts } from '../actions';

import { fetchPosts, deletePost, addNewPost, updatePost } from '../../api';
import * as actions from '../actions';

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(fetchPosts);

        yield put(getPosts.getPostsSuccess(posts.data));
    } catch (e) {
        console.log('err', e);
        yield put(getPosts.getPostsFailure(e));
    }
}
function* addPostSaga(action) {
    try {
        const res = yield call(addNewPost, action.payload);
        console.log('[addPostSaga]', res.data.data);
        yield put(actions.addPost.addPostSuccess(res.data.data));
    } catch (e) {
        console.log('err [addPostSaga]', e);
        yield put(actions.addPost.addPostFailure(e));
    }
}

function* updatePostSaga(action) {
    try {
        const res = yield call(updatePost, action.payload, action.payload.id);
        console.log('[updatePostSaga]', res.data.data);
        yield put(actions.updatePost.updatePostSuccess(res.data.data));
    } catch (e) {
        console.log('err [updatePostSaga]', e);
        yield put(actions.updatePost.updatePostFailure(e));
    }
}

function* deletePostSaga(action) {
    try {
        console.log('[deletePostSaga] action.payload ', action.payload);
        const deletedPost = yield call(deletePost, action.payload);
        console.log('[deletePostSaga]', deletedPost);
        yield put(actions.deletePost.deletePostSuccess(action.payload));
    } catch (e) {
        console.log('err [deletePostSaga]', e);
        yield put(actions.deletePost.deletePostFailure(e));
    }
}
// function* searchfilterSaga(action) {
//     console.log('[searchfilterSaga]', action.payload);
//     yield put(actions.filterSearch, action.payload);
// }

function* mySaga() {
    yield takeLatest(getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.addPost.addPostRequest, addPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
    // yield takeLatest(actions.filterSearch, searchfilterSaga);
}

export default mySaga;
