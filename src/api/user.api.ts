import axios from 'axios';
import { ListParams, ListResponse, User } from 'models';

export const USER_ENDPOINT = `${process.env.REACT_APP_API_URL}/users`;

export const userApi = {
  getFullData(): Promise<User[]> {
    return axios.get(`${USER_ENDPOINT}/getFull`);
  },
  getAll(params?: ListParams): Promise<ListResponse<User>> {
    return axios.get(USER_ENDPOINT, { params });
  },
  createUser(params: User): Promise<User> {
    return axios.post(USER_ENDPOINT, params);
  },
  getById(id: string): Promise<User> {
    return axios.get(`${USER_ENDPOINT}/getById/`, { params: { id } });
  },
  updateUser(params: User) {
    const url = `${USER_ENDPOINT}/${params.id}`;
    return axios.put(url, params);
  },
  deleteUser(id?: string) {
    const url = `${USER_ENDPOINT}/${id}`;
    return axios.delete(url);
  },
};
