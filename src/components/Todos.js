import React from "react";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import { ToastContainer } from "react-toastify";
export default class Todos extends React.PureComponent {
  render() {
    return (
      <div className="col-6 todos">
        <TodoHeader />
        <TodoList />
        <TodoFooter />
        <ToastContainer />
      </div>
    );
  }
}
