import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addTodo, clearTodos, deleteAllTodos } from "../actions/thunks";
import { getCompletedTodosCount } from "../selectors";

class TodoHeader extends React.PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    clearTodos: PropTypes.func.isRequired,
    deleteAllTodos: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleClick = () => {
    if (!this.state.value.length) {
      toast("Name cannot be empty!", {
        toastId: Symbol(),
        type: toast.TYPE.ERROR
      });
      return;
    }
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
  };

  handleClear = () => {
    if (!this.props.completedTodosCount) {
      toast("There aren't any completed todos, nothing to clear!", {
        toastId: Symbol(),
        type: toast.TYPE.WARNING
      });
      return;
    }
    this.props.clearTodos();
  };

  handleDeleteAll = () => {
    this.props.deleteAllTodos();
  };

  render() {
    return (
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          aria-describedby="add-button-addon"
          onChange={this.handleChange}
          placeholder="Name"
          value={this.state.value}
        />
        <div className="input-group-append">
          <button
            id="add-button-addon"
            className="btn btn-primary"
            type="button"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
        <button
          className="btn btn-danger ml-2"
          type="button"
          onClick={this.handleClear}
        >
          Clear
        </button>
        <button
          className="btn btn-danger ml-2"
          type="button"
          onClick={this.handleDeleteAll}
        >
          Delete All
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completedTodosCount: getCompletedTodosCount(state)
});

const mapDispatchToProps = {
  addTodo,
  clearTodos,
  deleteAllTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader);
