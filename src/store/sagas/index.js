import {all, fork} from 'redux-saga/effects';

import loginScreenSaga, {authorize} from './LoginSaga';

export function* rootSaga() {
  console.log('rootSage');
  yield all([loginScreenSaga()]);
}
