import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo, clearTodos } from "../actions/todoActions";
import { toast } from "react-toastify";

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChangeHandler = evt => {
    this.setState({ ...this.state, value: evt.target.value });
  };

  addClickHandler = () => {
    if (!!this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ ...this.state, value: "" });
      toast("TODO created!", {
        toastId: 1,
        type: toast.TYPE.SUCCESS
      });
    } else {
      toast("Name cannot be empty!", {
        toastId: 2,
        type: toast.TYPE.ERROR
      });
    }
  };

  clearClickHandler = () => {
    this.props.clearTodos();
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

const mapDispatchToProps = dispatch => {
  return {
    addTodo: name => {
      dispatch(addTodo(name));
    },
    clearTodos: () => {
      dispatch(clearTodos());
    }
  };
};

TableHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired
};

const TableHeaderContainer = connect(
  null,
  mapDispatchToProps
)(TableHeader);

export default TableHeaderContainer;
