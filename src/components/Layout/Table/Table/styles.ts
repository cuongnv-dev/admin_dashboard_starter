import styled from 'styled-components';
import tw from 'twin.macro';

export const TableContainer = styled.div`
  ${tw`
    overflow-y-auto overflow-x-auto pb-6
  `};
`;

export const Table = styled.table`
  ${tw`
    w-full whitespace-nowrap
  `}
`;

export const TableHeader = styled.thead`
  ${tw`h-14`}
`;

export const TableBody = styled.tbody``;

export const PaginationContainer = styled.div`
  ${tw`py-6  text-sm flex  flex-col lg:flex-row justify-between lg:items-center`}
`;

export const PaginationButtonGroup = styled.div`
  ${tw`flex flex-row items-center`}
`;

export const PaginationButton = styled.div`
  ${tw`flex flex-row justify-center items-center px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-black-lighter mr-2 cursor-pointer`}
`;

export const PaginationButtonLabel = styled.span`
  ${tw`text-xs font-medium px-2 text-black dark:text-white`}
`;

export const PaginationPageContainer = styled.div`
  ${tw`flex flex-row items-center mr-2 border-r border-l border-gray-100 px-6`}
`;

export const PaginationPageInput = styled.input`
  ${tw`
    w-8
    h-8
    rounded-md
    border
    border-gray-200
    dark:border-gray-700
    text-gray-600
    dark:text-gray-300
    bg-transparent
    mr-2
    cursor-pointer
    text-center
    focus:border-green-500
    focus:outline-none
    focus:z-10 focus:ring
    focus:ring-green-500
    focus:ring-opacity-40
    `}
`;

export const LoadingStatus = styled.div`
  ${tw`invisible lg:visible flex flex-row items-center`}
`;

export const LoadingText = styled.span`
  ${tw`text-sm pr-3`}
`;

export const PageInfo = styled.div`
  ${tw`invisible lg:visible`}
`;
