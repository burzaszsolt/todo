import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const todoListStyle = {
  marginLeft: "auto",
  marginRight: "auto"
};

const TodoTable = ({ todos, onTodoChange }) => {
  return (
    <div className="container mt-2">
      <h2>Todo list</h2>
      <div className="col-4" style={todoListStyle}>
        {todos.length ? (
          todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onChange={() => onTodoChange(todo.id)}
            />
          ))
        ) : (
          <p>Nothing to do</p>
        )}
      </div>
    </div>
  );
};

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoChange: PropTypes.func.isRequired
};

export default TodoTable;
