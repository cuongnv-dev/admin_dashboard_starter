import { ChartBarIcon, CogIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid';
import { useThemeContext } from 'store';
import { useLocation } from 'react-router-dom';
import { checkIsActive } from 'utils';
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
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-500 w-6 h-6 ${
                  activeDashboard ? 'text-green-500' : ''
                } ${viewFull ? 'ml-8' : 'ml-6'}`}
              />
              {viewFull && <AsideItemLabel active={activeDashboard}>Dashboard</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/users'} className="group">
              <AsideItemBorder active={activeUsers}></AsideItemBorder>

              <UserIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-500 w-6 h-6 ${
                  activeUsers ? 'text-green-500' : ''
                } ${viewFull ? 'ml-8' : 'ml-6'}`}
              />
              {viewFull && <AsideItemLabel active={activeUsers}>Users</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/oms'} className="group">
              <AsideItemBorder active={activeOrders}></AsideItemBorder>

              <ShoppingCartIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-500 w-6 h-6 ${
                  activeOrders ? 'text-green-500' : ''
                } ${viewFull ? 'ml-8' : 'ml-6'}`}
              />
              {viewFull && <AsideItemLabel active={activeOrders}>Orders</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>

          <AsideItemContaner>
            <AsideItem to={'/settings'} className="group">
              <AsideItemBorder active={activeSettings}></AsideItemBorder>

              <CogIcon
                className={`transition-all duration-200 text-gray-400 group-hover:text-green-500 w-6 h-6 ${
                  activeSettings ? 'text-green-500' : ''
                } ${viewFull ? 'ml-8' : 'ml-6'}`}
              />
              {viewFull && <AsideItemLabel active={activeSettings}>Settings</AsideItemLabel>}
            </AsideItem>
          </AsideItemContaner>
        </ul>
      </AsideNav>
    </AsideContainer>
  );
};
