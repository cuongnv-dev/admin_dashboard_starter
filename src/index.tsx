import { setupAxios, mockAxios } from 'api';
import axios from 'axios';
import { SplashScreen } from 'components/common';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastClassName, ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { history } from 'utils';
import './i18n/i18n';
import App from './App';
import { persistor, store } from './store/store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */ mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios, store);

const contextClass = {
  success: 'bg-green-400',
  error: 'bg-red-500',
  info: 'bg-gray-600',
  warning: 'bg-orange-400',
  default: 'bg-indigo-600',
  dark: 'bg-white-600 font-gray-300',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        <React.Suspense fallback={<SplashScreen />}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
          <ToastContainer
            toastClassName={({ type = 'default' }: any) =>
              contextClass[type as keyof typeof contextClass] +
              ' relative flex p-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
            }
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
