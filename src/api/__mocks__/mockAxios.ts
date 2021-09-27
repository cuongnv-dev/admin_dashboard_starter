import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockAuth from 'features/auth/__mocks__/mockAuth';
import mockUser from 'features/users/__mocks__/mockUsers';
import mockOrder from 'features/oms/__mocks__/mockOrders';

export const mockAxios = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios, { delayResponse: 300 });

  mockAuth(mock);
  mockUser(mock);
  mockOrder(mock);
  return mock;
};
