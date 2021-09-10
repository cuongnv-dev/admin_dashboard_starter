import { RefreshIcon, TrashIcon } from '@heroicons/react/outline';
import { useUsersUIContext } from 'features/users/_hook/userUIContext';
import { useMemo } from 'react';

export const SelectedItemActions = () => {
  const usersUIContext = useUsersUIContext();

  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      openDeleteUsersDialog: usersUIContext.openDeleteUsersDialog,
      openUpdateUsersStatusDialog: usersUIContext.openUpdateUsersStatusDialog,
    };
  }, [usersUIContext]);

  return (
    <div className="mt-4 text-sm w-full">
      <span>Selected records count: {usersUIProps.ids.length}</span>
      <div className="flex flex-row gap-2 mt-2">
        <button
          onClick={usersUIProps.openDeleteUsersDialog}
          className="shadow flex flex-row items-center bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-semibold"
        >
          <TrashIcon className="w-5 h-5 mr-2" />
          <span>Delete All</span>
        </button>
        <button
          onClick={usersUIProps.openUpdateUsersStatusDialog}
          className="shadow flex flex-row items-center bg-blue-200 text-blue-500 px-3 py-2 rounded-lg text-xs font-semibold"
        >
          <RefreshIcon className="w-5 h-5 mr-2" />
          <span>Update status</span>
        </button>
      </div>
    </div>
  );
};
