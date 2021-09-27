import axios from 'axios';
import { ListParams, ListResponse, Order, OrderCount } from 'models';

export const ORDER_ENDPOINT = `${process.env.REACT_APP_API_URL}/orders`;

export const orderApi = {
  getFullData(): Promise<Order[]> {
    return axios.get(`${ORDER_ENDPOINT}/getFull`);
  },
  getCount(): Promise<OrderCount> {
    return axios.get(`${ORDER_ENDPOINT}/count`);
  },
  getAll(params?: ListParams): Promise<ListResponse<Order>> {
    return axios.get(ORDER_ENDPOINT, { params });
  },
  // createUser(params: User): Promise<User> {
  //   return axios.post(ORDER_ENDPOINT, params);
  // },
  // getById(id: string): Promise<User> {
  //   return axios.get(`${ORDER_ENDPOINT}/getById/`, { params: { id } });
  // },
  // updateUser(params: User) {
  //   const url = `${ORDER_ENDPOINT}/${params.id}`;
  //   return axios.put(url, params);
  // },
  // deleteUser(id?: string) {
  //   const url = `${ORDER_ENDPOINT}/${id}`;
  //   return axios.delete(url);
  // },
};
