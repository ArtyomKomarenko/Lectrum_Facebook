// Core
import { fromJS, List } from 'immutable';

// Instruments
import { CREATE_POST_ASYNC, FILL_POSTS } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);

        case CREATE_POST_ASYNC:
            return state.unshift(fromJS(action.payload));

        default:
            return state;
    }
};
