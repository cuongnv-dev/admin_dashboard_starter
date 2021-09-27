import { PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'api';
import { ListParams, ListResponse, User } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { userActions } from './userSlice';

function* fetchUserList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<User> = yield call(userApi.getAll, action.payload);
    yield put(userActions.fetchUserListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch user list', error);
    yield put(userActions.fetchUserListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(userActions.setFilter(action.payload));
}

export default function* userSaga() {
  yield takeLatest(userActions.fetchUserList, fetchUserList);

  yield debounce(500, userActions.setFilterWithDebounce.type, handleSearchDebounce);
}
