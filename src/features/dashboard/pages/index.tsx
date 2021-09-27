import { useAppSelector } from 'store';
import { useLocation } from 'react-router-dom';

export const DashboardPage = () => {
  const { authToken } = useAppSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Token: {authToken}</p>
      <p>{location.pathname}</p>
    </div>
  );
};
