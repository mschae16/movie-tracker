import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById("main"));
