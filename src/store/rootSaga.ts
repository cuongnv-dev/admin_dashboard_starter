import authSaga from 'features/auth/_redux/authSaga';
import userSaga from 'features/users/_redux/userSaga';
import orderSaga from 'features/oms/_redux/orderSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), orderSaga()]);
}
