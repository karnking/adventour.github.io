import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme"
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Auth0Provider
    domain="dev-fxtuxl0mqujeteaf.us.auth0.com"
    clientId="QWHRQSlRrsoV97IM3V9mtLhicZAU9q4M"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider theme={theme} resetCSS>
    {/* <ThemeProvider theme={mtheme}> */}
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    {/* </ThemeProvider> */}
    </ChakraProvider>
    </Auth0Provider>
  </Provider>
 
);

reportWebVitals();