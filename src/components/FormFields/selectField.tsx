import { SelectOption } from 'models';
import { Control, useController } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import tw from 'twin.macro';

const SelectContainer = styled.div`
  ${tw`
    border
    border-gray-200
    rounded-lg
    my-1
  `}
`;

interface SelectFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
}

export const SelectField = ({ name, control, label, disabled, options }: SelectFieldProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });
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
        value={value}
        onChange={onChange}
        options={options}
      />
    </SelectContainer>
  );
};
