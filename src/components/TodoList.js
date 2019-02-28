import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import TodoSearch from "./TodoSearch";
import { updateTodoCompleted, updateTodoName } from "../actions/actionCreaters";
import { filterTodos } from "../selectors";

class TodoList extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    updateTodoCompleted: PropTypes.func.isRequired,
    updateTodoName: PropTypes.func.isRequired
  };

  handleCompletedUpdate = id => {
    this.props.updateTodoCompleted(id);
    toast("Completed!", {
      toastId: 3,
      type: toast.TYPE.SUCCESS
    });
  };

  handleNameUpdate = (id, name) => {
    this.props.updateTodoName(id, name);
    toast("Updated!", {
      toastId: 7,
      type: toast.TYPE.SUCCESS
    });
  };

  render() {
    const todoListStyle = {
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <div className="container mt-2">
        <h2>Todo list</h2>
        <div className="col-4" style={todoListStyle}>
          <TodoSearch />
          {this.props.todos.length ? (
            this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                onUpdateTodoCompleted={this.handleCompletedUpdate}
                onUpdateTodoName={this.handleNameUpdate}
              />
            ))
          ) : (
            <p>Nothing to do</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state)
});

const mapDispatchToProps = {
  updateTodoCompleted,
  updateTodoName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
