import {useDispatch} from 'react-redux';
import {delay, all, takeLatest, put} from 'redux-saga/effects';
import {LOGIN_REQUEST, ERROR_ACTION} from '../actions/LoginActions';

export function* authorize() {
  yield delay(4000);

  yield put({
    type: 'LOADED_ACTION',
    value: true,
  });
}

function* error({error}) {
  console.log('error = ');
}

function* loginUser({user}) {
  try {
    console.log('user.email ' + user.email + ' user.password ' + user.password);
  } catch (e) {
    yield put({type: ERROR_ACTION, e});
  }
}

export default function* loginScreenSaga() {
  console.log('LoginScreenSage');
  yield all([
    takeLatest(LOGIN_REQUEST, loginUser),
    takeLatest(ERROR_ACTION, error),
  ]);
}
