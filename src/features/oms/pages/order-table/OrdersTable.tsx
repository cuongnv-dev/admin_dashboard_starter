import { useAppDispatch, useAppSelector } from 'store';
import { CustomTable, TableItemActions } from 'components/Layout';
import { Order } from 'models';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useOmsUIContext } from '../../_hook/omsUIContext';
import { OrderTableHeader } from './components/OrderTableHeader';
import { orderActions } from '../../_redux/orderSlice';

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

  const renderBody = (item: Order, index: number) => (
    <tr
      className={`text-sm h-14  ${
        index !== 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''
      }  ${index % 2 === 0 ? 'bg-gray-50 dark:bg-black-lighter-2 dark:bg-opacity-50' : ''}`}
      key={index}
    >
      {/* <td>
        <CheckBox
          value={item.id}
          onClick={itemChecked}
          checked={usersUIProps.ids.includes(item.id || '')}
        />
      </td> */}
      <td className="pr-3 pl-4">{item.id}</td>
      <td className="pr-3">{item.channel}</td>
      <td className="pr-3">{item.store}</td>
      <td className="pr-3">{item.customerName}</td>
      <td className="pr-3">{item.phoneNumber}</td>
      <td className="pr-3">{item.orderTime}</td>

      <td className="pr-3">{item.deliveryDate}</td>

      <td className="pr-3">{item.deliveryTime}</td>

      <td className="pr-3">{item.status}</td>
      <td>
        <TableItemActions
          editLink={`/orders/${item.id}/edit`}
          deleteLink={`/orders/${item.id}/delete`}
        />
      </td>
    </tr>
  );

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
