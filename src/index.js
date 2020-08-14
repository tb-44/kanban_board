import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import persistMiddleware from "./app/middleware/persistMiddleware";
import rootReducer from "./app/reducers";
import App from "./app/components/App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(persistMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
