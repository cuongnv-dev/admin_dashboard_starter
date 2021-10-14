import { SelectOption } from 'models';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/outline';
interface FilterListBoxProps {
  options: SelectOption[];
  onChange: (value: SelectOption | null) => void;
}

export const FilterListBox = ({ options, onChange }: FilterListBoxProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOnSelectChange = (option: SelectOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  //cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm
  return (
    <Listbox
      value={selectedOption}
      onChange={(option: SelectOption) => handleOnSelectChange(option)}
    >
      <div className="relative mt-2">
        <Listbox.Button className="relative h-10 w-full   pl-3 pr-10 text-sm text-left bg-transparent rounded-lg border border-gray-200 dark:border-gray-700 focus:ring focus:ring-green-500 focus:ring-opacity-40">
          <span className="block truncate">{selectedOption.label}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm ">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ selected }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4  hover:text-green-500 dark:hover:text-white ${
                    selected ? 'text-green-500 dark:text-white font-medium' : ''
                  }`
                }
                value={option}
              >
                {({ selected, active }) => (
                  <>
                    <span className={` block truncate`}>{option.label}</span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
