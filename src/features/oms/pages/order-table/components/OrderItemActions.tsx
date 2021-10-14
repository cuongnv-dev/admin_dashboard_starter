import React from 'react';
import {
  PencilAltIcon,
  TrashIcon,
  CheckCircleIcon,
  EyeIcon,
  PrinterIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { Order } from 'models';
import styled from 'styled-components';
import tw from 'twin.macro';

const GreenButton = styled(Link)`
  ${tw`rounded-lg bg-green-100 dark:bg-green-600 dark:bg-opacity-40 hover:bg-green-600 dark:hover:bg-green-700 text-green-600 dark:text-green-200 hover:text-white dark:hover:text-white h-7 w-7 flex items-center ml-2`}
`;

const RedButton = styled(Link)`
  ${tw`rounded-lg bg-red-100 dark:bg-red-500 dark:bg-opacity-40 hover:bg-red-500 dark:hover:bg-red-700 text-red-500 dark:text-red-200 hover:text-white h-7 w-7 flex items-center ml-2`}
`;

const PrintButton = styled(Link)`
  ${tw`
  rounded-lg bg-blue-100 dark:bg-blue-600 dark:bg-opacity-40 hover:bg-blue-600 dark:hover:bg-blue-700 text-blue-600 dark:text-blue-200 hover:text-white dark:hover:text-white h-7 w-7 flex items-center ml-2
  `}
`;

interface OrderItemActionsProps {
  item: Order;
}

export const OrderItemActions = ({ item }: OrderItemActionsProps) => {
  return (
    <div className="flex flex-row items-center">
      <GreenButton to={'editLink'}>
        <CheckCircleIcon className="w-4 h4  mx-auto" />
      </GreenButton>
      <GreenButton to={`/oms/${item.id}`}>
        <EyeIcon className="w-4 h4  mx-auto" />
      </GreenButton>
      <GreenButton to={'editLink'}>
        <PencilAltIcon className="w-4 h4  mx-auto" />
      </GreenButton>
      <RedButton to={'deleteLink'}>
        <TrashIcon className="w-4 h4  mx-auto" />
      </RedButton>
      <PrintButton to={'editLink'}>
        <PrinterIcon className="w-4 h4  mx-auto" />
      </PrintButton>
    </div>
  );
};
