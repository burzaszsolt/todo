import React from "react";
import "./App.css";
import TodoHeaderContainer from "./components/TodoHeader";
import TodoFooterContainer from "./components/TodoFooter";
import TodoContainer from "./components/TodoList";
import { ToastContainer } from "react-toastify";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Todo app</h1>
      <TodoHeaderContainer />
      <TodoContainer />
      <TodoFooterContainer />
      <ToastContainer />
    </header>
  </div>
);

export default App;
