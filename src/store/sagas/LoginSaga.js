import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

export function* authorize() {
  yield delay(4000);

  yield put({
    type: 'LOADED_ACTION',
    value: true,
  });
}
