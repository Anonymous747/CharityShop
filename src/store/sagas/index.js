import {all, fork} from 'redux-saga/effects';

import {authorize} from './LoginSaga';

export function* rootSaga() {
  yield all([fork(authorize)]);
}
