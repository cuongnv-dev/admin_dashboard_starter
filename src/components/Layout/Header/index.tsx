import { BellIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import useDarkMode from 'app/useDarkMode';
import { words } from 'lodash';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { appRoutes } from '../../../constants/common';
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
          <Title className="">{appRoutes[paths[0] as keyof typeof appRoutes]}</Title>
          <Time>
            <span className="text-green-500">{dayOfWeek}</span>
            <span>{`, ${currentDay}`}</span>
          </Time>
        </TitleContainer>
        <ButtonRow>
          <IconButton>
            <BellIcon className="w-5 h-5 mx-auto " />
          </IconButton>
          <IconButton onClick={toggleTheme}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-5 h-5 mx-auto " />
            ) : (
              <SunIcon className="w-5 h-5 mx-auto" />
            )}
          </IconButton>
          <PopoverUser />
        </ButtonRow>
      </HeaderContent>
    </HeaderContainer>
  );
};
