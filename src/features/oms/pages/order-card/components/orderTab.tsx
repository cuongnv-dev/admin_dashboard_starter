import { ListParams, OrderCount } from 'models';
import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ORDER_STATUS_OPTIONS } from '../../../../../constants/common';

export const TabButton = styled.div`
  ${tw`
    py-1 cursor-pointer text-sm font-medium flex-row items-center
  `};
  ${({ active }: any) => (active ? tw`border-green-500 text-green-500 border-b ` : tw``)}
` as any;

export interface OrderTabProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  count: OrderCount;
}

export const OrderTab = ({ filter, onChange, count }: OrderTabProps) => {
  const [activeStatus, setActiveStatus] = useState<string>(ORDER_STATUS_OPTIONS[0].value);

  const handleStatusChange = (status: string) => {
    setActiveStatus(status);
    console.log('status::', status);

    if (!onChange) return;
    const newFilter: ListParams = {
      ...filter,
      _page: 1,
      status: status,
    };
    if (status === 'all') delete newFilter.status;
    onChange(newFilter);
  };

  return (
    <div className="mt-6">
      <div className="flex flex-row gap-6">
        {ORDER_STATUS_OPTIONS.map((option) => (
          <TabButton
            key={option.value}
            onClick={() => handleStatusChange(option.value)}
            active={activeStatus === option.value}
          >
            {option.label}{' '}
            <span className="text-red-500 italic text-xs">
              ({count[option.value as keyof OrderCount]})
            </span>
          </TabButton>
        ))}
      </div>
    </div>
  );
};
