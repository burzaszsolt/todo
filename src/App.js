import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";

const App = () => (
  <div className="col-6 todos">
    <TodoHeader />
    <TodoList />
    <TodoFooter />
    <ToastContainer />
  </div>
);

export default App;
