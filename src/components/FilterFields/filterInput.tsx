import { InputHTMLAttributes, RefObject } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const InputContainer = styled.div`
  ${tw`
    mb-1 mt-2
  `};
`;

const OutlineInput = styled.input`
  ${tw`
    border-gray-200
    dark:border-gray-700
    text-gray-600
    dark:text-gray-300
    bg-transparent
    w-full
    w-full
    px-3
    h-10
    border
    rounded-lg
    text-sm
    focus:border-green-400
    focus:outline-none
    focus:z-10
    focus:ring
    focus:ring-green-500
    focus:ring-opacity-40
  `};
`;

interface FilterInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  forwardRef: RefObject<HTMLInputElement>;
  placeholder?: string;
  onChange: (event: any) => void;
}

export const FilterInput = ({
  id,
  forwardRef,
  placeholder,
  onChange,
  ...inputProps
}: FilterInputProps) => {
  return (
    <InputContainer>
      <OutlineInput
        ref={forwardRef}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        {...inputProps}
      />
    </InputContainer>
  );
};
