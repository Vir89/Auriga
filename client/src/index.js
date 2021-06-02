import React from 'react';
import ReactDOM from 'react-dom';
import Theme from "./styles/theme";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import MyAPIProvider from './context/ApiContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyAPIProvider>
    <Theme>
        <App /> 
    </Theme>
    </MyAPIProvider>
    <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
