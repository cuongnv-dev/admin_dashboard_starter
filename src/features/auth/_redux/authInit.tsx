import { authApi } from 'api/auth.api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect, useRef, useState } from 'react';
import { connect, shallowEqual } from 'react-redux';
import { SplashScreen } from '../../../components/common';
import { authActions } from './authSlice';

function AuthInit({ children }: { children: React.ReactNode }) {
  const didRequest = useRef(false);
  const dispatch = useAppDispatch();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const { authToken } = useAppSelector(
    ({ auth }) => ({
      authToken: auth.authToken,
    }),
    shallowEqual
  );

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          const user = await authApi.getUserByToken();
          dispatch(authActions.fulfillUser(user));
        }
      } catch (error) {
        console.error(error);
        if (!didRequest.current) {
          dispatch(authActions.logout());
        }
      } finally {
        setShowSplashScreen(false);
      }
      return () => (didRequest.current = true);
    };

    if (authToken) {
      requestUser();
    } else {
      // dispatch(authActions.fulfillUser(undefined));
      setShowSplashScreen(false);
    }
    // eslint-disable-next-line
  }, []);

  return showSplashScreen ? <SplashScreen /> : <>{children}</>;
}
export default connect(null, authActions)(AuthInit);
