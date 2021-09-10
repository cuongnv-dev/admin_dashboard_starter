import Select from 'react-select';
import styled from 'styled-components';
import tw from 'twin.macro';

const SelectContainer = styled.div`
  ${tw`
    border
    border-gray-200
    dark:border-gray-700
    bg-transparent
    rounded-lg
    my-1
  `}
`;

export interface SelectOption {
  label?: string;
  value: number | string;
}

interface FilterSelectProps {
  options: SelectOption[];
  onChange: (value: SelectOption | null) => void;
}

export const FilterSelect = ({ options, onChange }: FilterSelectProps) => {
  return (
    <SelectContainer>
      <Select
        styles={{
          control: (styles, state) => ({
            ...styles,
            borderRadius: 8,
            borderColor: state.isFocused ? '#3b82f6' : '#e5e7eb',
            border: 0,
          }),
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
        defaultValue={options[0]}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </SelectContainer>
  );
};
