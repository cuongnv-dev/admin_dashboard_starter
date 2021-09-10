import styled from 'styled-components';
import tw from 'twin.macro';

export const BrandContainer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    items-center
    justify-between
    text-gray-500
    dark:text-white
    pl-6
    pr-4
    h-16
  `}
`;

export const Logo = styled.img`
  ${tw`
    h-full transition-all duration-500
  `}
`;
