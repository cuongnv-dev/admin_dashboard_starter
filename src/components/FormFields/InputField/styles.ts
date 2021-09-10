import styled from 'styled-components';
import tw from 'twin.macro';

export const InputContainer = styled.div`
  ${tw`w-full my-2`};
`;
export const InputLabel = styled.label`
  ${tw`text-sm`};
`;
export const Input = styled.input`
  ${tw`
    mt-1
    text-sm
    font-normal
    bg-transparent
    w-full
    px-4
    py-3
    border
    placeholder-gray-400
    rounded-lg
    focus:outline-none
    focus:ring
    focus:ring-green-500
    focus:ring-opacity-40
    focus:border-green-400
    text-gray-600
    dark:text-gray-300
    border-gray-200
    dark:border-gray-700
  `};
`;
export const Error = styled.p`
  ${tw`text-xs text-red-500 mt-1`};
`;
