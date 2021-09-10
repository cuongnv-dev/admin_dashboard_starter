import { authApi } from 'api/auth.api';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/_redux/authSlice';
import { LoginParams } from 'models';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bg from '../../../../assets/images/bg-4.jpg';
import logo from '../../../../assets/images/logo.png';
import { LoginForm } from './components/loginForm';

export const LoginPage = () => {
  let history = useHistory();

  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const handleStudentFormSubmit = async (formValues: LoginParams) => {
    try {
      const user = await authApi.login(formValues);
      dispatch(authActions.login(user));
      history.push('/');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row ">
      {/*begin::Left side*/}
      <div className="w-full md:w-1/2 flex-col bg-red-400 h-full">
        <div
          className="w-full h-full bg-cover px-10 pb-10 justify-between flex flex-col"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <img alt="Central Retail Logo" src={logo} className="w-52 h-40  " />

          <div>
            <p className="text-2xl text-white font-medium pb-3"> Welcome to Central Retail</p>
            <p className="text-sm  text-gray-200 font-light"> The order management system</p>
          </div>
          <p className="text-gray-300 text-sm font-medium invisible md:visible">
            © 2021 Central Retail
          </p>
        </div>
      </div>
      {/*end::Left side */}

      {/*begin::Login form*/}
      <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 items-center content-center">
        <p className="text-right text-gray-700 text-sm  w-full">
          Don't have an account yet?
          <Link to="/register" className="text-blue-600 ml-1 text-sm font-medium">
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col h-full justify-center mt-8 md:mt-0 w-full lg:w-3/4  xl:w-3/5">
          <p className="text-2xl text-gray-700 font-semibold pb-2">Login to your account</p>
          <p className="text-sm  text-gray-400">
            Thanks you for get back to Central order management system, let access to complete your
            work now
          </p>
          <div className="mt-12 w-full">
            {error && (
              <div className="bg-red-300 rounded-lg text-red-600 w-full py-4 mb-4 px-6">
                <p className="text-white text-sm">{error}</p>
              </div>
            )}
            <LoginForm onSubmit={handleStudentFormSubmit} />
          </div>
        </div>
      </div>
      {/*end::Login form*/}
    </div>
  );
};
