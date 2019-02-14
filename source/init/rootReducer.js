// Core
import { combineReducers } from 'redux';

// Reducers
import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { usersReducer as users } from '../bus/users/reducer';
import { routerReducer as router } from 'react-router-redux';

export const rootReducer =  combineReducers({
    auth,
    ui,
    posts,
    profile,
    router,
    users,
});
