import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

/** @Routes */
import Routes from './routes.tsx';

/** @Redux */
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';

/** @OAuth TODO: change json to env or something */
import { GoogleOAuthProvider } from '@react-oauth/google';
import googleOAuth2Client from '../googleOAuth2Client.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <ReduxProvider store={store}>
        <GoogleOAuthProvider clientId={googleOAuth2Client.web.client_id}>
          <Routes />
        </GoogleOAuthProvider>
      </ReduxProvider>
    </React.StrictMode>
  </>
);
