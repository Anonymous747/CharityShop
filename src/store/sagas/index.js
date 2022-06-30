import {all, fork, merge, call} from 'redux-saga/effects';

import loginScreenSaga from './LoginSaga';
import signUpScreenSaga from './SignUpSaga';

export function* rootSaga() {
  console.log('rootSaga');
  yield all([call(signUpScreenSaga), call(loginScreenSaga)]);
}
