import { useAppDispatch, useAppSelector } from 'store';
import { CustomTable, TableItemActions } from 'components/Layout';
import { Order } from 'models';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useOmsUIContext } from '../../_hook/omsUIContext';
import { OrderTableHeader } from './components/OrderTableHeader';
import { orderActions } from '../../_redux/orderSlice';
import { OrderItemActions } from './components/OrderItemActions';
import { Badge } from 'components/common';

export const TableRow = styled.tr`
  ${tw``}
`;

export const OrdersTable = () => {
  const { filter, list, pagination, loading } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const omsUIContext = useOmsUIContext();
  const omsUIProps = useMemo(() => {
    return {
      ids: omsUIContext.ids,
      setIds: omsUIContext.setIds,
      openEditOrderPage: omsUIContext.openEditOrderPage,
      openDeleteOrderDialog: omsUIContext.openDeleteOrderDialog,
    };
  }, [omsUIContext]);

  useEffect(() => {
    // server call by queryParams
    dispatch(orderActions.fetchOrderList(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filter]);

  const handlePageChange = (page: number) => {
    dispatch(
      orderActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  const renderBody = (item: Order, index: number) => {
    let badge = 'success';
    switch (item.status) {
      case 'new':
        badge = 'info';
        break;
      case 'processing':
        badge = 'warning';
        break;
      case 'canceled':
        badge = 'danger';
        break;
      default:
        break;
    }

    return (
      <tr
        className={`text-xs h-10  ${
          index !== 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''
        }  ${index % 2 === 0 ? 'bg-gray-50 dark:bg-black-lighter-2 dark:bg-opacity-50' : ''}`}
        key={index}
      >
        <td className="pr-3 pl-4">{item.id}</td>
        <td className="pr-3">{item.channel}</td>
        <td className="pr-3">{item.store}</td>
        <td className="pr-3">{item.customerName}</td>
        <td className="pr-3">{item.phoneNumber}</td>
        <td className="pr-3">{item.orderTime}</td>
        <td className="pr-3">{item.deliveryDate}</td>
        <td className="pr-3">{item.deliveryTime}</td>
        <td className="pr-3">
          <Badge preset={badge as any} label={item.status} />
        </td>
        <td>
          <OrderItemActions item={item} />
        </td>
      </tr>
    );
  };

  return (
    <CustomTable
      headerComponent={<OrderTableHeader />}
      renderBody={renderBody}
      loading={loading}
      page={filter._page}
      totalRows={pagination._totalRows}
      data={list}
      handlePageChange={handlePageChange}
    />
  );
};
