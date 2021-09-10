import { TxKeyPath } from 'i18n/i18n';
import { t } from 'i18n/translation';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import styled from 'styled-components';
import tw from 'twin.macro';

const InputContainer = styled.div`
  ${tw`
    my-1
  `};
`;

const InputLabel = styled.label`
  ${tw`
    text-xs 
    text-gray-700
  `}
`;

const OutlineInput = styled.input`
  ${tw`
    border-gray-200 
    text-gray-600 
    w-full 
    w-full
    px-3 
    py-2  
    border 
    rounded-lg  
    text-sm
    focus:border-blue-500 
    focus:outline-none 
    focus:z-10
  `};
`;

const ErrorMessage = styled.p`
  ${tw`
    text-xs 
    text-red-500 
    mt-1
  `}
`;

interface OutlineInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  txLabel?: TxKeyPath;
  label?: string;
  placeholder?: string;
}

export const OutlineInputField = ({
  name,
  control,
  label,
  txLabel,
  placeholder,
  ...inputProps
}: OutlineInputFieldProps) => {
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const i18nText = txLabel && t(txLabel);
  const labelText = i18nText || label;

  return (
    <div>
      {labelText && <InputLabel htmlFor={name}>{labelText}</InputLabel>}
      <InputContainer>
        <OutlineInput
          ref={ref}
          id={name}
          name={name}
          value={value || ''}
          style={{ height: 39 }}
          onChange={onChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </InputContainer>
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </div>
  );
};
