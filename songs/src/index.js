import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={legacy_createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
