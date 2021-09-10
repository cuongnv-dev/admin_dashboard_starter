import { userTableMock } from './userTableMock';
import MockAdapter from 'axios-mock-adapter';
import { LOGIN_URL, ME_URL } from 'api/auth.api';

export default function mockAuth(mock: MockAdapter) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { username, password } = JSON.parse(data);

    if (username && password) {
      const user = userTableMock.find(
        (x) => x.username.toLowerCase() === username.toLowerCase() && x.password === password
      );
      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onGet(ME_URL).reply(({ headers: { Authorization } }) => {
    const authToken =
      Authorization && Authorization.startsWith('Bearer ') && Authorization.slice('Bearer '.length);
    if (authToken) {
      const user = userTableMock.find((x) => x.authToken === authToken);

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [401];
  });
}
