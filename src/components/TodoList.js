import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { updateTodo } from "../actions/actionCreaters";
import { getFilteredTodos } from "../selectors";

class TodoList extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    updateTodo: PropTypes.func.isRequired
  };

  state = {
    term: ""
  };

  handleChange = evt => {
    this.setState({
      term: evt.target.value
    });
  };

  handleUpdate = id => {
    this.props.updateTodo(id);
    toast("Completed!", {
      toastId: 3,
      type: toast.TYPE.SUCCESS
    });
  };

  render() {
    const displayedTodos = getFilteredTodos(this.props.todos, this.state.term);
    const todoListStyle = {
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <div className="container mt-2">
        <h2>Todo list</h2>
        <div className="col-4" style={todoListStyle}>
          <form>
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
              placeholder="Search"
              value={this.state.value}
            />
          </form>
          {displayedTodos.length ? (
            displayedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                updateTodo={() => this.handleUpdate(todo.id)}
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

const mapStateToProps = (state, props) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = {
  updateTodo
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainer;
