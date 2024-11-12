import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';
import store from "./app/store";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
    <ConfigProvider>
      <App />
      </ConfigProvider>
    </Provider>
  </Router>
);
