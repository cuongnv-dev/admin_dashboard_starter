import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/common';
import { PageContainer, PageContent, PageHeaderContainer, PageTitle } from 'components/Layout';
import { SelectedItemActions } from 'components/Layout/Table/components/selectedItemAction';
import { ListParams } from 'models';
import React, { useEffect, useMemo } from 'react';
import { useUsersUIContext } from '../../_hook/userUIContext';
import { userActions } from '../../_redux/userSlice';
import { UsersTable } from '../users-table/UsersTable';
import { UserFilter, ExportUsers } from './components';

export function UsersCard() {
  const { filter } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      newUserButtonClick: usersUIContext.newUserButtonClick,
    };
  }, [usersUIContext]);

  useEffect(() => {
    dispatch(userActions.fetchUserList(filter));
  }, [dispatch, filter]);

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(userActions.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(userActions.setFilter(newFilter));
  };
  console.log(filter);
  return (
    <PageContainer>
      <PageContent>
        <PageHeaderContainer>
          <PageTitle>User</PageTitle>
          <div className="flex flex-row gap-2">
            <ExportUsers />
            <Button onClick={usersUIProps.newUserButtonClick} label="New user" />
          </div>
        </PageHeaderContainer>
        <UserFilter
          filter={filter}
          onChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        {usersUIProps.ids.length > 0 && <SelectedItemActions />}
        <UsersTable />
      </PageContent>
    </PageContainer>
  );
}
