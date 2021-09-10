import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { UsersUIEvent, UsersUIProvider } from '../_hook/userUIContext';
import { UserDeleteDialog } from './user-delete-dialog/UserDeleteDialog';
import { UsersCard } from './users-card/UsersCard';

export function UsersPage() {
  const history = useHistory();
  const usersUIEvents: UsersUIEvent = {
    newUserButtonClick: () => {
      history.push('/users/new');
    },
    openEditUserPage: (id: string) => {
      history.push(`/users/${id}/edit`);
    },
    openDeleteUserDialog: (id: string) => {
      history.push(`/users/${id}/delete`);
    },
    openDeleteUsersDialog: () => {
      history.push(`/users/deleteUsers`);
    },
    openUpdateUsersStatusDialog: () => {
      history.push('/users/updateStatus');
    },
  };

  return (
    <UsersUIProvider usersUIEvents={usersUIEvents}>
      {/* <Route path="/users/deleteUsers">
        {({ history, match }) => (
          <UsersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push('/users');
            }}
          />
        )}
      </Route> */}
      <Route path="/users/:id/delete">
        {({ history, match }) => (
          <UserDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push('/users');
            }}
          />
        )}
      </Route>

      {/* <Route path="/users/updateStatus">
        {({ history, match }) => (
          <UsersUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push('/users');
            }}
          />
        )}
      </Route> */}
      <UsersCard />
    </UsersUIProvider>
  );
}
