import { USER_ENDPOINT } from 'api';
import MockAdapter from 'axios-mock-adapter';
import { userTableMock } from 'features/auth/__mocks__/userTableMock';
import { chunk, findIndex } from 'lodash';
import { ListParams } from 'models';
import moment from 'moment';
import { makeid } from 'utils';

export default function mockUser(mock: MockAdapter) {
  mock.onGet(`${USER_ENDPOINT}/getFull`).reply((config) => {
    return [200, userTableMock];
  });
  mock.onGet(USER_ENDPOINT).reply((config) => {
    const params: ListParams = config.params;
    let filterList = [...userTableMock];
    if (params.name_like) {
      filterList = filterList.filter((user) => user.username.includes(params.name_like));
    }

    if (params.status) {
      if (params.status === 'active') {
        filterList = filterList.filter((user) => !user.isDisabled);
      }
      if (params.status === 'disable') {
        filterList = filterList.filter((user) => user.isDisabled);
      }
    }

    const data = chunk(filterList, params._limit);
    if (data.length > 0) {
      const page = params._page ? params._page - 1 : 0;
      const users = data[page];
      return [
        200,
        {
          data: users,
          pagination: {
            _limit: params._limit,
            _page: params._page,
            _totalRows: filterList.length,
          },
        },
      ];
    }
    return [
      200,
      {
        data: [],
        pagination: {
          _limit: params._limit,
          _page: params._page,
          _totalRows: filterList.length,
        },
      },
    ];
  });
  mock.onPost(USER_ENDPOINT).reply(({ data }) => {
    const user = JSON.parse(data);
    const {
      email = '',
      username = '',
      firstname = 2000,
      lastname = 0,
      password = '',
      phone = '',
      isDisabled = false,
      authToken = '',
      createdBy = 'admin',
      createdDate = moment().format('DD-MM-YYYY'),
      modifiedBy = '',
      modifiedDate = '',
    } = user;

    const existedIndex = findIndex(userTableMock, { email });
    if (existedIndex === -1) {
      const id = makeid(12);
      const newUser = {
        id,
        email,
        username,
        password,
        firstname,
        lastname,
        phone,
        isDisabled,
        authToken,
        createdDate,
        createdBy,
        modifiedBy,
        modifiedDate,
      };
      userTableMock.push(newUser);
      return [200, { user: newUser }];
    } else return [400, { message: 'this email already used' }];
  });
  mock.onGet(/users\/getById/).reply((config) => {
    const { id } = config.params;

    const user = userTableMock.find((el) => el.id === id);
    if (!user) {
      return [400];
    }
    return [200, user];
  });
  mock.onPut(/users\/\d+/).reply((config) => {
    const id = config.url?.match(/users\/(\d+)/)?.[1];
    console.log(id);
    const user = JSON.parse(config.data);
    const index = userTableMock.findIndex((el) => el.id === id?.toString());
    if (index === -1) {
      return [400];
    }
    userTableMock[index] = { ...user };
    return [200];
  });
  mock.onDelete(/users\/\d+/).reply((config) => {
    const id = config.url?.match(/users\/(\d+)/)?.[1];
    const index = userTableMock.findIndex((el) => el.id === id?.toString());
    userTableMock.splice(index, 1);
    if (index === -1) {
      return [400];
    }
    return [200];
  });
}
