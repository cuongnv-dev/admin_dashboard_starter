import { useAppSelector } from 'app/hooks';
import { CheckBox } from 'components/FormFields';
import { useMemo } from 'react';
import { useUsersUIContext } from '../../../_hook/userUIContext';

interface UserTableHeaderProps {
  onCheckboxClick?: (event: any) => void;
  checked?: boolean;
}

export const UserTableHeader = ({ onCheckboxClick, checked }: UserTableHeaderProps) => {
  const { list } = useAppSelector((state) => state.user);
  const usersUIContext = useUsersUIContext();

  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
    };
  }, [usersUIContext]);

  const checkAll = (e: any) => {
    if (e.target.checked) {
      let listIds: string[] = [];
      list.forEach((item) => listIds.push(item.id || ''));
      usersUIProps.setIds(listIds);
      return;
    }
    usersUIProps.setIds([]);
  };

  return (
    <tr className="border-b border-gray-200 dark:border-gray-800  text-sm ">
      <th className="font-medium text-left pr-10 pl-4">Username</th>
      <th className="font-medium text-left pr-10">First name</th>
      <th className="font-medium text-left pr-12">Last name</th>
      <th className="font-medium text-left pr-48">Email</th>
      <th className="font-medium text-left pr-12">Phone</th>
      <th className="font-medium text-left pr-12">Status</th>
      <th className="font-medium text-left pr-10">Modify by</th>
      <th className="font-medium text-left pr-6">Actions</th>
    </tr>
  );
};
