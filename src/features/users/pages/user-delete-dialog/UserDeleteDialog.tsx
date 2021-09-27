import { userApi } from 'api';
import { useAppDispatch, useAppSelector } from 'store';
import { userActions } from 'features/users/_redux/userSlice';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface UserEditDialogProps {
  id: string | null;
  show?: boolean;
  onHide: () => void;
}

export const UserDeleteDialog = ({ id, show, onHide }: UserEditDialogProps) => {
  const { filter } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDeleteUser = async () => {
    if (id) {
      setLoading(true);
      try {
        await userApi.deleteUser(id);
        dispatch(userActions.fetchUserList(filter));
        setLoading(false);
        toast.success('Delete user successfully!');
        onHide();
      } catch (error) {
        setLoading(false);
        toast.error('User not found!');
      }
    }
  };
  return (
    <>
      {show && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center py-3 px-4 border-b border-solid border-blueGray-200 dark:border-gray-600 rounded-t">
                  <p className="font-semibold">User Delete</p>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 text-sm leading-relaxed">
                    Are you sure to permanently delete this user?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-4 p-4 border-t border-solid border-blueGray-200 dark:border-gray-600 rounded-b">
                  {/* <Button label="Cancel" preset="link" onClick={onHide} /> */}
                  <button
                    onClick={onHide}
                    className="hover:shadow rounded-md text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 h-10 px-4 text-xs font-semibold"
                  >
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={handleDeleteUser}
                    className="hover:shadow rounded-md text-gray-700 dark:text-gray-200
                    bg-red-700 dark:hover:bg-gray-700 h-10 px-4 text-xs font-semibold"
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
};
