import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addTodo, clearTodos } from "../actions/actionCreaters";
import { getCompletedTodosCount } from "../selectors";

class TableHeader extends React.PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    clearTodos: PropTypes.func.isRequired
  };

  state = {
    value: ""
  };

  onChangeHandler = evt => {
    this.setState({ value: evt.target.value });
  };

  addClickHandler = () => {
    if (!this.state.value.length) {
      toast("Name cannot be empty!", {
        toastId: 2,
        type: toast.TYPE.ERROR
      });
      return;
    } else {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
      toast("TODO created!", {
        toastId: 1,
        type: toast.TYPE.SUCCESS
      });
    }
  };

  clearClickHandler = () => {
    if (!this.props.completedTodosCount) {
      toast("There aren't any completed todos, nothing to clear!", {
        toastId: 5,
        type: toast.TYPE.WARNING
      });
      return;
    } else {
      this.props.clearTodos();
      toast("Completed todos cleared", {
        toastId: 6,
        type: toast.TYPE.SUCCESS
      });
    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              aria-describedby="add-button-addon"
              onChange={this.onChangeHandler}
              placeholder="Name"
              value={this.state.value}
            />
            <div className="input-group-append">
              <button
                id="add-button-addon"
                className="btn btn-primary"
                type="button"
                onClick={this.addClickHandler}
              >
                Add
              </button>
            </div>
            <button
              className="btn btn-danger ml-2"
              type="button"
              onClick={this.clearClickHandler}
            >
              Clear
            </button>
          </div>
        </form>
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

const TodoHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHeader);

export default TodoHeaderContainer;
