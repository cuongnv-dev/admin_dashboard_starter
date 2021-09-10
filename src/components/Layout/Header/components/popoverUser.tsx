import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ClipboardListIcon, MailIcon, UserIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { Button } from '../../../common';
import { authActions } from 'features/auth/_redux/authSlice';

const solutions = [
  {
    name: 'My Profile',
    description: 'Account settings and more',
    href: '/user-profile',
    icon: IconOne,
  },
  {
    name: 'My Messages',
    description: 'Messages and emails',
    href: '/user-profile',
    icon: IconTwo,
  },
  {
    name: 'My Tasks',
    description: 'Latest tasks & projects',
    href: '/user-profile',
    icon: IconThree,
  },
];

export const PopoverUser = () => {
  const user = useAppSelector((state) => state.auth.currentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="flex
              flex-row
              z-50
              items-center
              pl-4
              pr-1
              py-1
              text-sm
              font-medium
              rounded-lg
              cursor-pointer
              bg-white
              dark:bg-gray-700
              ml-3
            "
          >
            <p className="text-gray-400 dark:text-gray-300">Hi, </p>
            <p className="ml-1 font-semibold text-gray-600 dark:text-gray-100">{user?.username}</p>
            <div className="bg-green-100 ml-2 rounded-lg w-8 h-8 flex flex-col justify-center ">
              <p className="text-center text-green-600 font-semibold text-lg">
                {user?.username?.[1]}
              </p>
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-72 px-4 mt-3 transform -translate-x-1/2 -left-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col gap-8 bg-white dark:bg-gray-700 p-7 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg "
                    >
                      <div className="flex bg-green-100 items-center justify-center flex-shrink-0 p-2 rounded-lg">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 p-4 bg-white dark:bg-gray-700 flex flex-row justify-end">
                  <Button onClick={handleLogout} label="Sign out" />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

function IconOne() {
  return <UserIcon className="w-5 h-5 text-green-500" />;
}

function IconTwo() {
  return <MailIcon className="w-5 h-5 text-green-500" />;
}

function IconThree() {
  return <ClipboardListIcon className="w-5 h-5 text-green-500" />;
}
