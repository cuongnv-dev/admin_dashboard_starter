import * as React from 'react';
import { useController } from 'react-hook-form';
import { InputFieldProps } from './InputField/inputField';

export function FloatingLabelInput({
  name,
  control,
  label,
  placeholder,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, ref },
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
  });
  return (
    <div className="w-full my-2 relative">
      <input
        ref={ref}
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        required
        className={`peer px-4 py-2 border rounded-lg h-10 w-full border-gray-300 text-gray-700 placeholder-transparent focus:outline-none focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-blue-500'
        }`}
        placeholder={placeholder}
        {...inputProps}
      />
      <label
        htmlFor={name}
        className="absolute  left-4 -top-3 text-gray-700 text-sm bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {error && <p className="text-xs text-red-500 mt-1">{error?.message}</p>}
    </div>
  );
}
