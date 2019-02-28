import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Todo app</h1>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
      <ToastContainer />
    </header>
  </div>
);

export default App;
