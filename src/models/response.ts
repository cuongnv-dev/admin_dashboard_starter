import { User } from './user';

export interface LoginResponse {
  user: User;
  authToken: string;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}