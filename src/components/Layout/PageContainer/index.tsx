import styled from 'styled-components';
import tw from 'twin.macro';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-6 overflow-y-auto h-full mt-14">{children}</div>;
};

export const PageContent = styled.div`
  ${tw`
    bg-white
    rounded-lg
    shadow-sm
    pb-10
    px-6
    dark:bg-black-dark
  `}
`;
export const PageHeaderContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-between
    items-center
    py-3
    border-b
    dark:border-gray-700
  `}
`;

export const PageTitle = styled.p`
  ${tw`
    font-semibold
  `}
`;
