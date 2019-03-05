import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import Home from "./Home";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { localStorageApi } from "./localStorageApi";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ localStorageApi }))
  )
);

const routing = (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Todo app</h1>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/todos"
              >
                Todos
              </NavLink>
            </li>
          </ul>
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todos" component={App} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
