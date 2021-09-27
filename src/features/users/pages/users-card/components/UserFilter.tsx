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

export interface FilterFormParams {
  query?: string;
  status?: string;
  type?: string;
}

export interface UserFiltersProps {
  filter: ListParams;

  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

export const UserFilter = ({ filter, onChange, onSearchChange }: UserFiltersProps) => {
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
    <div className="mt-6  flex flex-row flex-wrap text-xs">
      <div className="w-1/2 xl:w-1/4 pr-2   mb-6 md:mb-4">
        <FilterInputLabel type="search" id="query" text="by username" />
        <FilterInput
          id="query"
          placeholder="Search user by name"
          forwardRef={queryRef}
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-1/2  md:w-1/3 xl:w-1/5 pl-2  mb-6 md:mb-0">
        <FilterInputLabel id="status" text="by Status" />
        <FilterListBox options={USER_STATUS_OPTIONS} onChange={handleStatusChange} />
      </div>
    </div>
  );
};
