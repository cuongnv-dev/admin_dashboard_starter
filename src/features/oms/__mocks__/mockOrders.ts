import { ORDER_ENDPOINT } from 'api';
import { ListParams } from 'models';
import MockAdapter from 'axios-mock-adapter';
import { chunk } from 'lodash';
import { orderTableMock } from './orderTableMock';

export default function mockOrder(mock: MockAdapter) {
  mock.onGet(`${ORDER_ENDPOINT}/getFull`).reply((config) => {
    return [200, orderTableMock];
  });
  mock.onGet(`${ORDER_ENDPOINT}/count`).reply((config) => {
    const newCount = orderTableMock.reduce(
      (counter, { status }) => (status === 'new' ? (counter += 1) : counter),
      0
    );
    const processing = orderTableMock.reduce(
      (counter, { status }) => (status === 'processing' ? (counter += 1) : counter),
      0
    );

    const done = orderTableMock.reduce(
      (counter, { status }) => (status === 'done' ? (counter += 1) : counter),
      0
    );
    const canceled = orderTableMock.reduce(
      (counter, { status }) => (status === 'canceled' ? (counter += 1) : counter),
      0
    );

    return [
      200,
      {
        all: orderTableMock.length,
        new: newCount,
        processing,
        done,
        canceled,
      },
    ];
  });
  mock.onGet(ORDER_ENDPOINT).reply((config) => {
    const params: ListParams = config.params;
    let filterList = [...orderTableMock];
    if (params.name_like) {
      filterList = filterList.filter((order) => order.customerName.includes(params.name_like));
    }

    if (params.code_like) {
      filterList = filterList.filter((order) => order.id.includes(params.code_like));
    }

    if (params.phone_like) {
      filterList = filterList.filter((order) => order.phoneNumber.includes(params.phone_like));
    }

    if (params.store) {
      filterList = filterList.filter((order) => (order.store = params.store));
    }

    if (params.channel) {
      filterList = filterList.filter((order) => (order.channel = params.channel));
    }

    if (params.status) {
      if (params.status === 'new') {
        filterList = filterList.filter((order) => order.status === 'new');
      }
      if (params.status === 'processing') {
        filterList = filterList.filter((order) => order.status === 'processing');
      }
      if (params.status === 'done') {
        filterList = filterList.filter((order) => order.status === 'done');
      }
      if (params.status === 'canceled') {
        filterList = filterList.filter((order) => order.status === 'canceled');
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
  // mock.onPost(ORDER_ENDPOINT).reply(({ data }) => {
  //   const user = JSON.parse(data);
  //   const {
  //     email = '',
  //     username = '',
  //     firstname = 2000,
  //     lastname = 0,
  //     password = '',
  //     phone = '',
  //     isDisabled = false,
  //     authToken = '',
  //     createdBy = 'admin',
  //     createdDate = moment().format('DD-MM-YYYY'),
  //     modifiedBy = '',
  //     modifiedDate = '',
  //   } = user;

  //   const existedIndex = findIndex(orderTableMock, { email });
  //   if (existedIndex === -1) {
  //     const id = makeid(12);
  //     const newUser = {
  //       id,
  //       email,
  //       username,
  //       password,
  //       firstname,
  //       lastname,
  //       phone,
  //       isDisabled,
  //       authToken,
  //       createdDate,
  //       createdBy,
  //       modifiedBy,
  //       modifiedDate,
  //     };
  //     orderTableMock.push(newUser);
  //     return [200, { user: newUser }];
  //   } else return [400, { message: 'this email already used' }];
  // });
  // mock.onGet(/users\/getById/).reply((config) => {
  //   const { id } = config.params;

  //   const user = orderTableMock.find((el) => el.id === id);
  //   if (!user) {
  //     return [400];
  //   }
  //   return [200, user];
  // });
  // mock.onPut(/users\/\d+/).reply((config) => {
  //   const id = config.url?.match(/users\/(\d+)/)?.[1];
  //   console.log(id);
  //   const user = JSON.parse(config.data);
  //   const index = orderTableMock.findIndex((el) => el.id === id?.toString());
  //   if (index === -1) {
  //     return [400];
  //   }
  //   orderTableMock[index] = { ...user };
  //   return [200];
  // });
  // mock.onDelete(/users\/\d+/).reply((config) => {
  //   const id = config.url?.match(/users\/(\d+)/)?.[1];
  //   const index = orderTableMock.findIndex((el) => el.id === id?.toString());
  //   orderTableMock.splice(index, 1);
  //   if (index === -1) {
  //     return [400];
  //   }
  //   return [200];
  // });
}
