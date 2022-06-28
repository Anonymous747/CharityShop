import {all, fork} from 'redux-saga/effects';

import loginScreenSaga, {authorize} from './LoginSaga';

export function* rootSaga() {
  yield all([loginScreenSaga(), authorize()]);
}
