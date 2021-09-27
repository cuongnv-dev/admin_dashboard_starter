import { PayloadAction } from '@reduxjs/toolkit';
import { userApi, orderApi } from 'api';
import { ListParams, ListResponse, Order, User } from 'models';
import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { orderActions } from './orderSlice';

function* fetchOrderList(action: PayloadAction<ListParams>) {
  try {
    const { data, count } = yield all({
      data: call(orderApi.getAll, action.payload),
      count: call(orderApi.getCount),
    });
    yield put(orderActions.fetchOrderListSuccess({ data: data, count }));
  } catch (error) {
    console.log('Failed to fetch order list', error);
    yield put(orderActions.fetchOrderListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(orderActions.setFilter(action.payload));
}

export default function* orderSaga() {
  yield takeLatest(orderActions.fetchOrderList, fetchOrderList);

  yield debounce(500, orderActions.setFilterWithDebounce.type, handleSearchDebounce);
}
