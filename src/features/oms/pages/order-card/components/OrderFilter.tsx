import {
  FilterInput,
  FilterInputLabel,
  FilterListBox,
  FilterSelect,
} from 'components/FilterFields';
import { Listbox } from '@headlessui/react';
import { USER_STATUS_OPTIONS, USER_TYPE_OPTIONS } from 'constants/common';
import { ListParams, SelectOption } from 'models';
import { ChangeEvent, useRef } from 'react';

export interface OrderFiltersProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

export const OrderFilter = ({ filter, onChange, onSearchChange }: OrderFiltersProps) => {
  const queryRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter: ListParams = {
      ...filter,
      name_like: e.target.value,
      _page: 1,
    };
    onSearchChange(newFilter);
  };

  const handleStatusChange = (status: SelectOption | null) => {
    if (!onChange) return;

    const statusValue = status ? (status.value === 'all' ? null : status.value) : '';

    const newFilter: ListParams = {
      ...filter,
      _page: 1,
      status: statusValue,
    };
    onChange(newFilter);
  };

  const handleTypeChange = (type: SelectOption | null) => {
    if (!onChange) return;

    // const typeValue = type ? (type.value === 'all' ? '' : type.value) : '';
    // const newFilter: ListParams = {
    //   ...filter,
    //   _page: 1,
    //   type: typeValue,
    // };
    // onChange(newFilter);
  };

  return (
    <div className="mt-6 w-full xl:w-10/12  flex flex-row flex-wrap text-xs">
      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pr-2 lg:w-1/3">
        <FilterInputLabel type="search" id="code" text="by order code" />
        <FilterInput
          id="code"
          placeholder="Search by order code"
          forwardRef={queryRef}
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pl-2 lg:w-1/3 lg:px-2">
        <FilterInputLabel type="search" id="phone" text="by user phone number" />
        <FilterInput
          id="phone"
          placeholder="Search by user phone number"
          forwardRef={queryRef}
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pr-2 lg:w-1/3 lg:pl-2">
        <FilterInputLabel type="search" id="username" text="by user name" />
        <FilterInput
          id="username"
          placeholder="Search by user name"
          forwardRef={queryRef}
          onChange={handleSearchChange}
        />
      </div>

      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pl-2 lg:w-1/3">
        <FilterInputLabel id="date" text="by Date" />
        <FilterListBox options={USER_STATUS_OPTIONS} onChange={handleStatusChange} />
      </div>
      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pr-2 lg:w-1/3 lg:px-2">
        <FilterInputLabel id="channel" text="by Channel" />
        <FilterListBox options={USER_STATUS_OPTIONS} onChange={handleStatusChange} />
      </div>
      <div className="w-full mb-6 md:w-1/2 md:mb-4 md:pl-2 lg:w-1/3 lg:pl-2">
        <FilterInputLabel id="store" text="by Store" />
        <FilterListBox options={USER_STATUS_OPTIONS} onChange={handleStatusChange} />
      </div>
    </div>
  );
};
