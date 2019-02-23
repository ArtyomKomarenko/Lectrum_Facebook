// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { replace } from 'react-router-redux';
import { book } from '../../../../navigation/book';

export function* updatePassword ({ payload: {
    newPassword, oldPassword,
}}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{ newPassword, oldPassword }]);

        if (response.status !== 200) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(replace(book.profile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
