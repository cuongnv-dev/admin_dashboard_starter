import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderContainer = styled.div`
  ${tw`fixed bg-gray-100 dark:bg-black-dark h-16 top-0 right-0 z-10 w-full pr-4 md:pr-6`};
`;

export const HeaderContent = styled.div`
  ${tw`flex flex-row  items-center justify-between w-full h-full`};
`;

export const TitleContainer = styled.div`
  ${tw`flex flex-col items-start justify-between pl-6`};
`;
export const Title = styled.div`
  ${tw`text-base font-bold text-center`};
`;
export const Time = styled.div`
  ${tw`text-xs font-medium mt-1 text-gray-500`};
`;

export const ButtonRow = styled.div`
  ${tw`flex flex-row items-center`};
`;
export const IconButton = styled.button`
  ${tw`w-10 h-10 ml-3 dark:bg-gray-700 rounded-xl bg-white shadow-sm hover:text-green-500`};
`;
