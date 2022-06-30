import {takeLatest, all} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from '../actions/SignUpActions';

function* signUp({user}) {
  try {
    console.log('SignUpSaga ' + user);
  } catch (e) {
    console.log('SignUpSaga error');
  }
}

export default function* signUpScreenSaga() {
  console.log('signUpScreenSaga');
  yield all([takeLatest(SIGNUP_REQUEST, signUp)]);
}
