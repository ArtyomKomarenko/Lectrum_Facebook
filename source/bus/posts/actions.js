// Types
import { types } from './types';

// Instruments
import { api } from "../../REST";

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },

    fetchPostsAsync: () => async (dispatch) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },

    createPost: (comment) => {
        return {
            type:    types.CREATE_POST,
            payload: comment,
        };
    },

    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
};
