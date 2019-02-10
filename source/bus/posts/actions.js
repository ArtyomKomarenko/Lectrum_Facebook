// Types
import { types } from './types';

export const postsActions = {
    // Sync
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (comment) => {
        return {
            type:    types.CREATE_POST,
            payload: comment,
        };
    },
    clearPost: () => {
        return {
            type: types.CLEAR_POST,
        };
    },
    removePost: (postId) => {
        return {
            type:    types.REMOVE_POST,
            payload: postId,
        };
    },

    // Async
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (postId) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: postId,
        };
    },
};
