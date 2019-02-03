// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPosts } from '../bus/posts/saga/watchers';

export function* rootSage () {
    yield all([call(watchPosts)]);
}
