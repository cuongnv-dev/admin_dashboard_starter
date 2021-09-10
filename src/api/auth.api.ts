import axios from 'axios';
import { LoginParams, User } from 'models';

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;
export const ME_URL = `${process.env.REACT_APP_API_URL}/auth/me`;

export const authApi = {
  login({ username, password }: LoginParams): Promise<User> {
    return axios.post(LOGIN_URL, { username, password });
  },
  getUserByToken(): Promise<User> {
    // Authorization head should be fulfilled in interceptor.
    return axios.get(ME_URL);
  },
};
