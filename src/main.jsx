import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "swiper/css";
import { Provider } from "react-redux";
import store from "config/configureStore";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
