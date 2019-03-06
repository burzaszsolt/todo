import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addTodo, clearTodos } from "../actions/thunks";
import { getCompletedTodosCount } from "../selectors";

class TodoHeader extends React.PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    clearTodos: PropTypes.func.isRequired
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
        toastId: 2,
        type: toast.TYPE.ERROR
      });
      return;
    }
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
    toast("TODO created!", {
      toastId: 1,
      type: toast.TYPE.SUCCESS
    });
  };

  handleClear = () => {
    if (!this.props.completedTodosCount) {
      toast("There aren't any completed todos, nothing to clear!", {
        toastId: 5,
        type: toast.TYPE.WARNING
      });
      return;
    }
    this.props.clearTodos();
    toast("Completed todos cleared", {
      toastId: 6,
      type: toast.TYPE.SUCCESS
    });
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completedTodosCount: getCompletedTodosCount(state)
});

const mapDispatchToProps = {
  addTodo,
  clearTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader);
