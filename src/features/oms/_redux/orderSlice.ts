import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, Order, OrderCount, PaginationParams } from 'models';

export interface FetchOrderListResponse {
  data: ListResponse<Order>;
  count: OrderCount;
}

export interface OrderState {
  loading: boolean;
  count: OrderCount;
  list: Order[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: OrderState = {
  loading: false,
  count: {
    all: 0,
    cancelled: 0,
    done: 0,
    new: 0,
    processing: 0,
  },
  list: [],
  filter: {
    _page: 1,
    _limit: 10,
  },
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrderList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchOrderListSuccess(state, action: PayloadAction<FetchOrderListResponse>) {
      state.list = action.payload.data.data;
      state.pagination = action.payload.data.pagination;
      state.loading = false;
      state.count = action.payload.count;
    },
    fetchOrderListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const orderActions = orderSlice.actions;

// Reducer
const orderReducer = orderSlice.reducer;
export default orderReducer;
