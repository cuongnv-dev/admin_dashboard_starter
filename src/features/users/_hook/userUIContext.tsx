import React, { createContext, useContext, useState } from 'react';

export interface UsersUIContextState extends UsersUIEvent {
  ids: string[];
  setIds: (value: string[]) => void;
}

const contextDefaultValues: UsersUIContextState = {
  ids: [],
  setIds: () => {},
  newUserButtonClick: () => {},
  openEditUserPage: (id: string) => {},
  openDeleteUserDialog: (id: string) => {},
  openDeleteUsersDialog: () => {},
  openUpdateUsersStatusDialog: () => {},
};

const UsersUIContext = createContext<UsersUIContextState>(contextDefaultValues);

export function useUsersUIContext() {
  return useContext(UsersUIContext);
}

export const UsersUIConsumer = UsersUIContext.Consumer;

export interface UsersUIEvent {
  newUserButtonClick: () => void;
  openEditUserPage: (id: string) => void;
  openDeleteUserDialog: (id: string) => void;
  openDeleteUsersDialog: () => void;
  openUpdateUsersStatusDialog: () => void;
}

export interface UsersUIProviderProps {
  usersUIEvents: UsersUIEvent;
  children?: React.ReactNode;
}

export function UsersUIProvider({ usersUIEvents, children }: UsersUIProviderProps) {
  const [ids, setIds] = useState<string[]>([]);

  const value = {
    ids,
    setIds,
    newUserButtonClick: usersUIEvents.newUserButtonClick,
    openEditUserPage: usersUIEvents.openEditUserPage,
    openDeleteUserDialog: usersUIEvents.openDeleteUserDialog,
    openDeleteUsersDialog: usersUIEvents.openDeleteUsersDialog,
    openUpdateUsersStatusDialog: usersUIEvents.openUpdateUsersStatusDialog,
  };

  return <UsersUIContext.Provider value={value}>{children}</UsersUIContext.Provider>;
}
