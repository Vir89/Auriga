import React from 'react';
import ReactDOM from 'react-dom';
import Theme from "./styles/theme";
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import APIProvider from './context/ApiContext'

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
    <Theme>
        <App />     
        <GlobalStyles />
    </Theme>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
