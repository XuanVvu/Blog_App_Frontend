import { getType, getPosts, deletePost, addPost, updatePost } from '../actions';
import { INIT_STATE } from '../../constant';

const postsReducer = (state = INIT_STATE.postsList, action) => {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };

        case getType(deletePost.deletePostSuccess):
            return {
                ...state,
                data: state.data.filter((post) => post.id !== action.payload),
            };
        case getType(addPost.addPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case getType(updatePost.updatePostSuccess):
            return {
                ...state,
                data: state.data.map((post) => (post.id === action.payload.id ? action.payload : post)),
            };

        default:
            return state;
    }
};

export default postsReducer;
