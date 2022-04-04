import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// prime react

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

//setup react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
