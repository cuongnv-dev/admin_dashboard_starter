import { useAppDispatch, useAppSelector } from 'store';
import { Badge } from 'components/common';
import { CustomTable, TableItemActions } from 'components/Layout';
import { useUsersUIContext } from 'features/users/_hook/userUIContext';
import { userActions } from 'features/users/_redux/userSlice';
import { User } from 'models';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { UserTableHeader } from './components/UserTableHeader';
export const TableRow = styled.tr`
  ${tw``}
`;

export const UsersTable = () => {
  const { filter, list, pagination, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      openEditUserPage: usersUIContext.openEditUserPage,
      openDeleteUserDialog: usersUIContext.openDeleteUserDialog,
    };
  }, [usersUIContext]);

  useEffect(() => {
    // clear selections list
    usersUIProps.setIds([]);
    // server call by queryParams
    dispatch(userActions.fetchUserList(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filter]);

  const handlePageChange = (page: number) => {
    usersUIProps.setIds([]);
    dispatch(
      userActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  const itemChecked = (e: any) => {
    if (e.target.checked) {
      usersUIProps.setIds([...usersUIProps.ids, e.target.value]);
      return;
    }
    const index = usersUIProps.ids.indexOf(e.target.value);
    if (index > -1) {
      const listIds: string[] = [...usersUIProps.ids];
      listIds.splice(index, 1);
      usersUIProps.setIds(listIds);
    }
  };

  const renderBody = (item: User, index: number) => (
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
      <td className="pr-4 pl-4">{item.username}</td>
      <td className="pr-4">{item.firstname}</td>
      <td className="pr-4">{item.lastname}</td>
      <td className="pr-4">{item.email}</td>
      <td className="pr-4">{item.phone}</td>
      <td>
        {!item.isDisabled ? (
          <Badge preset="success" label="Active" />
        ) : (
          <Badge preset="danger" label="Disable" />
        )}
      </td>
      <td>{item.createdBy}</td>
      <td>
        <TableItemActions
          editLink={`/users/${item.id}/edit`}
          deleteLink={`/users/${item.id}/delete`}
        />
      </td>
    </tr>
  );

  return (
    <CustomTable
      headerComponent={<UserTableHeader />}
      renderBody={renderBody}
      loading={loading}
      page={filter._page}
      totalRows={pagination._totalRows}
      data={list}
      handlePageChange={handlePageChange}
    />
  );
};
