import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useDarkMode } from 'store';
import { words } from 'lodash';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { appRoutes } from 'constants/common';
import { PopoverUser } from './components/popoverUser';
import {
  ButtonRow,
  HeaderContainer,
  HeaderContent,
  IconButton,
  Time,
  Title,
  TitleContainer,
} from './styles';

export const Header = ({ paddingLeft }: { paddingLeft: string }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const location = useLocation();
  const paths = words(location.pathname, /[^/]+/g);
  const currentDay = moment().format('DD MMMM YYYY');
  const dayOfWeek = moment().format('dddd');
  const toggleTheme = () => {
    setTheme(colorTheme);
  };

  return (
    <HeaderContainer>
      <HeaderContent className={`${paddingLeft}`}>
        <TitleContainer>
          <Title className="dark:text-white">{appRoutes[paths[0] as keyof typeof appRoutes]}</Title>
          <Time>
            <span className="text-green-500">{dayOfWeek}</span>
            <span>{`, ${currentDay}`}</span>
          </Time>
        </TitleContainer>
        <ButtonRow>
          <IconButton>
            <BellIcon className="w-6 h-6 mx-auto dark:text-white" />
          </IconButton>
          <IconButton onClick={toggleTheme}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-6 h-6 mx-auto dark:text-white" />
            ) : (
              <SunIcon className="w-6 h-6 mx-auto dark:text-white" />
            )}
          </IconButton>

          <PopoverUser />
        </ButtonRow>
      </HeaderContent>
    </HeaderContainer>
  );
};
