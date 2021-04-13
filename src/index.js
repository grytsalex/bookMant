import React from "react";
import logger from "redux-logger";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.jsx";
import rootReducer from "./reducers/rootReducer";

import './styles/index.less';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
