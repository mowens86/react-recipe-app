import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from 'react-cookie';
import theme from './components/UI/Theme/Theme';
import "@fontsource/condiment/400.css";
import "@fontsource/roboto-condensed/400.css";

ReactDOM.render(
    <React.StrictMode>
      <CookiesProvider>
        <ChakraProvider theme={theme}>
          <Auth0Provider
            domain="dev-mowens.us.auth0.com"
            clientId="ppY1ISKYky0eQPPt3Dis5XmKyl4D2XYm"
            redirectUri={window.location.origin}>
            <App />
          </Auth0Provider>
        </ChakraProvider>
      </CookiesProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
