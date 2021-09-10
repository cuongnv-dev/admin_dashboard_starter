import { ChartBarIcon, CogIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';
import { useThemeContext } from 'app/themeContext';
import { useLocation } from 'react-router-dom';
import { checkIsActive } from 'utils/helper';
import { Brand } from './components/Brand/Brand';
import {
  AsideContainer,
  AsideItem,
  AsideItemBorder,
  AsideItemContaner,
  AsideItemLabel,
  AsideNav,
} from './styles';

export const Aside = () => {
  const { viewFull } = useThemeContext();
  const location = useLocation();

  const activeDashboard = checkIsActive(location, '/dashboard');
  const activeUsers = checkIsActive(location, '/users');
  const activeOrders = checkIsActive(location, '/oms');
  const activeSettings = checkIsActive(location, '/settings');

  return (
    <AsideContainer viewFull={viewFull}>
      <Brand />
      <AsideNav>
        <ul>
          <AsideItemContaner>
            <AsideItem to={'/dashboard'} className="group">
              <AsideItemBorder active={activeDashboard}></AsideItemBorder>

              <ChartBarIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-300 ${
                  activeDashboard ? 'text-green-300' : ''
                } ${viewFull ? 'ml-8 w-4 h-4 ' : 'ml-6 w-5 h-5 '}`}
              />
              {viewFull && <AsideItemLabel active={activeDashboard}>Dashboard</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/users'} className="group">
              <AsideItemBorder active={activeUsers}></AsideItemBorder>

              <UserIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-300 ${
                  activeUsers ? 'text-green-300' : ''
                } ${viewFull ? 'ml-8 w-4 h-4 ' : 'ml-6 w-5 h-5 '}`}
              />
              {viewFull && <AsideItemLabel active={activeUsers}>Users</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/oms'} className="group">
              <AsideItemBorder active={activeOrders}></AsideItemBorder>

              <ShoppingCartIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-300 ${
                  activeOrders ? 'text-green-300' : ''
                } ${viewFull ? 'ml-8 w-4 h-4 ' : 'ml-6 w-5 h-5 '}`}
              />
              {viewFull && <AsideItemLabel active={activeOrders}>Orders</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/settings'} className="group">
              <AsideItemBorder active={activeSettings}></AsideItemBorder>

              <CogIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-300 ${
                  activeSettings ? 'text-green-300' : ''
                } ${viewFull ? 'ml-8 w-4 h-4 ' : 'ml-6 w-5 h-5 '}`}
              />
              {viewFull && <AsideItemLabel active={activeSettings}>Settings</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>
        </ul>
      </AsideNav>
    </AsideContainer>
  );
};
