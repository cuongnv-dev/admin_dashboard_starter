import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { Control, Controller, useController } from 'react-hook-form';
import { Error, Input, InputContainer, InputLabel } from './styles';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
}

export function InputField({
  name,
  control,
  label,
  placeholder,
  defaultValue,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        ref={ref}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        {...inputProps}
      />
      {error && <Error className="">{error?.message}</Error>}
    </InputContainer>
  );
}
