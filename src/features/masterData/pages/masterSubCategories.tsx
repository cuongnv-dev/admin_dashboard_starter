import { useLocation } from 'react-router-dom';

export const MasterSubCategoriesPage = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Master Sub Categories page</h1>
      <p>{location.pathname}</p>
    </div>
  );
};
