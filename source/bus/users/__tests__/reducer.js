// Core
import { fromJS, List } from 'immutable';

// Types
import { usersReducer } from '../reducer';

// Actions
import { usersActions } from '../actions';

const initialState = List();

describe('users reducer:', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle FILL USERS action', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(__.users))).toEqual(fromJS(__.users));
    });

    test('should handle CLEAR USERS action', () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState);
    });
});
