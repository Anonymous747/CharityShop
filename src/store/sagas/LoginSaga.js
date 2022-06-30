import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import {LOGIN_REQUEST} from '../actions/LoginActions';

export function* authorize() {
  yield delay(4000);

  yield put({
    type: 'LOADED_ACTION',
    value: true,
  });
}

function* loginUser({user}) {
  try {
    console.log('user.email ' + user.email + ' user.password ' + user.password);
  } catch (error) {
    console.log('CATCH ' + error);
  }
}

export default function* loginScreenSaga() {
  console.log('LoginScreenSage');
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
