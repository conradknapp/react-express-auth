import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import "./index.css";
import App from "./App";
import SignIn from "./components/SignIn";

import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
