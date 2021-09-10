import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const TableItemActions = ({
  editLink,
  deleteLink,
}: {
  editLink: string;
  deleteLink: string;
}) => {
  return (
    <div className="flex flex-row items-center">
      <Link
        to={editLink}
        className="rounded-lg
        bg-green-100 dark:bg-green-600 dark:bg-opacity-40
        hover:bg-green-600 dark:hover:bg-green-700 text-green-600 dark:text-green-200 hover:text-white dark:hover:text-white h-7 w-7 flex items-center"
      >
        <PencilAltIcon className="w-4 h4  mx-auto" />
      </Link>
      <Link
        to={deleteLink}
        className="rounded-lg bg-red-100 dark:bg-red-500 dark:bg-opacity-40 hover:bg-red-500 dark:hover:bg-red-700 text-red-500 dark:text-red-200 hover:text-white h-7 w-7 flex items-center ml-2"
      >
        <TrashIcon className="w-4 h4  mx-auto" />
      </Link>
    </div>
  );
};
