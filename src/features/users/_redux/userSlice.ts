import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListParams, ListResponse, PaginationParams, User } from 'models';

export interface UserState {
  loading: boolean;
  list: User[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: UserState = {
  loading: false,
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchUserListSuccess(state, action: PayloadAction<ListResponse<User>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchUserListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const userActions = userSlice.actions;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
