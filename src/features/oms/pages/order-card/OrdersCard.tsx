import { useAppDispatch, useAppSelector } from 'store';
import { Button } from 'components/common';
import { PageContainer, PageContent, PageHeaderContainer, PageTitle } from 'components/Layout';
import { ListParams } from 'models';
import React, { useMemo } from 'react';
import { useOmsUIContext } from '../../_hook/omsUIContext';
import { OrdersTable } from '../order-table/OrdersTable';
import { ExportOrders, OrderFilter } from './components';
import { OrderTab } from './components/orderTab';
import { orderActions } from '../../_redux/orderSlice';

export function OrdersCard() {
  const { filter, count } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const omsUIContext = useOmsUIContext();

  const omsUIProps = useMemo(() => {
    return {
      ids: omsUIContext.ids,
      setIds: omsUIContext.setIds,
      newOrderButtonClick: omsUIContext.newOrderButtonClick,
    };
  }, [omsUIContext]);

  // useEffect(() => {
  //   dispatch(orderActions.fetchUserList(filter));
  // }, [dispatch, filter]);

  const handleSearchChange = (newFilter: ListParams) => {
    // dispatch(orderActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(orderActions.setFilter(newFilter));
  };
  return (
    <PageContainer>
      <PageContent>
        <PageHeaderContainer>
          <PageTitle>Orders Management</PageTitle>
          <div className="flex flex-row gap-2">
            <ExportOrders />
            <Button onClick={omsUIProps.newOrderButtonClick} label="New order" />
          </div>
        </PageHeaderContainer>
        <OrderTab count={count} filter={filter} onChange={handleFilterChange} />
        <OrderFilter
          filter={filter}
          onChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        <OrdersTable />
      </PageContent>
    </PageContainer>
  );
}
