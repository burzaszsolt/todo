import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import TodoSearch from "./TodoSearch";
import {
  getTodos,
  updateTodoCompleted,
  updateTodoName,
  deleteTodo
} from "../actions/thunks";
import { filterTodos } from "../selectors";

class TodoList extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    updateTodoCompleted: PropTypes.func.isRequired,
    updateTodoName: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTodos();
  }

  handleCompletedUpdate = (id, completed) => {
    this.props.updateTodoCompleted(id, completed);
  };

  handleNameUpdate = (id, name) => {
    this.props.updateTodoName(id, name);
  };

  handleDeleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <h2>Todo list</h2>
        <TodoSearch />
        {this.props.todos.length ? (
          this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdateTodoCompleted={this.handleCompletedUpdate}
              onUpdateTodoName={this.handleNameUpdate}
              onDeleteTodo={this.handleDeleteTodo}
            />
          ))
        ) : (
          <p>Nothing to do</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state)
});

const mapDispatchToProps = {
  getTodos,
  updateTodoCompleted,
  updateTodoName,
  deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
