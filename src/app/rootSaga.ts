import authSaga from 'features/auth/_redux/authSaga';
import userSaga from 'features/users/_redux/userSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
