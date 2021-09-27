import { useThemeContext } from 'store';
import { SCREENS } from 'constants/common';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Aside } from '../Aside';
import { Header } from '../Header';

const Screen = styled.div`
  ${tw`
    min-h-screen md:flex text-gray-700 dark:text-gray-400 text-sm  bg-gray-100 dark:bg-black-dark
  `}
`;

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { viewFull } = useThemeContext();

  const pl = isMobile ? 'pl-0' : viewFull ? 'pl-56' : 'pl-20';

  return (
    <Screen>
      {!isMobile && <Aside />}
      <Header paddingLeft={pl} />
      <div className={`${pl} flex-1 overflow-hidden h-full pt-6 pb-8 `}>{children}</div>
    </Screen>
  );
};
