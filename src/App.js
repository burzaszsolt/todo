import React from "react";
import "./App.css";
import TableHeaderContainer from "./components/TableHeader";
import TableFooterContainer from "./components/TableFooter";
import TodoContainer from "./components/TodoContainer";
import { ToastContainer } from "react-toastify";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Todo app</h1>
      <TableHeaderContainer />
      <TodoContainer />
      <TableFooterContainer />
      <ToastContainer />
    </header>
  </div>
);

export default App;
