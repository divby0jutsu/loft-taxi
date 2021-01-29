import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Authentication from "./Authentication";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Authentication>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authentication>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
