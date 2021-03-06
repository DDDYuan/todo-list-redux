import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter
} from "connected-react-router";
import { Route, Switch } from "react-router";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";
import TodoItemInfo from "./components/TodoItemInfo";
import Login from "./components/Login";
import reducers from "./reducers";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/todo/:id" component={TodoItemInfo} />
        <Route path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
