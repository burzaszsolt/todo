import React from "react";
import "./App.css";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Login from "./components/Login";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Todo app</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/todos">
              Todos
            </NavLink>
          </li>
        </ul>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/todos" component={Todos} />
        </Switch>
        <ToastContainer />
      </div>
    </div>
  </Router>
);

export default App;
