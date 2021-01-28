import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authentication from "./Authentication";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <Authentication>
      <CssBaseline />
      <App />
    </Authentication>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
