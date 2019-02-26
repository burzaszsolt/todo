import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getTodosCount,
  getCompletedTodosCount,
  getUncompletedTodosCount
} from "../selectors";

class TableFooter extends React.PureComponent {
  static propTypes = {
    completed: PropTypes.number.isRequired,
    all: PropTypes.number.isRequired
  };

  state = {
    value: ""
  };

  onChangeHandler = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const pStyle = {
      marginLeft: "10px"
    };
    return (
      <div>
        <form>
          <div className="row">
            <p>All: {this.props.all}</p>
            <p style={pStyle}>Completed: {this.props.completed}</p>
            <p style={pStyle}>Uncompleted: {this.props.uncompleted}</p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: getTodosCount(state),
    completed: getCompletedTodosCount(state),
    uncompleted: getUncompletedTodosCount(state)
  };
};

const TodoFooterContainer = connect(mapStateToProps)(TableFooter);
export default TodoFooterContainer;
