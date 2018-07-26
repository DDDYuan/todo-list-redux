import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

import { createBrowserHistory } from "history";
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter
} from "connected-react-router";
import { Route, Switch } from "react-router";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
