import styled from 'styled-components';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';

export const AsideContainer = styled.div`
  ${tw`
    shadow-sm
    bg-white
    dark:bg-black-dark
    fixed
    h-screen
    top-0
    left-0
    flex-none
    flex-col
    text-gray-700
    z-30
    text-gray-500
    dark:text-gray-300
    border-r-0
    dark:border-r
    dark:border-gray-700
  `};
  ${({ viewFull }: any) => (viewFull ? tw`w-56` : tw`w-20`)}
` as any;

export const AsideNav = styled.div`
  ${tw`
    mt-6
    flex
    flex-col
    w-full
  `}
`;

export const AsideItem = styled(NavLink)`
  ${tw`flex flex-row items-center justify-start font-medium hover:text-green-400 `};
`;

export const AsideItemBorder = styled.div`
  ${tw`w-1 rounded-tr-md rounded-br-md h-10 transition-all duration-200`};
  ${({ active }: any) => (active ? tw`bg-green-500` : tw`bg-transparent`)}
` as any;

export const AsideItemLabel = styled.span`
  ${tw`ml-4 text-sm truncate transition-all duration-200`};
  ${({ active }: any) => (active ? tw`text-green-500` : tw``)}
` as any;

export const AsideItemContaner = styled.li`
  ${tw`py-2`};
`;
