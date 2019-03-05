import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getTodosCount,
  getCompletedTodosCount,
  getUncompletedTodosCount
} from "../selectors";

class TodoFooter extends React.PureComponent {
  static propTypes = {
    completed: PropTypes.number.isRequired,
    all: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="row">
        <p className="col-sm-12 col-md-12 col-lg-4">All: {this.props.all}</p>
        <p className="col-sm-12 col-md-12 col-lg-4">
          Completed: {this.props.completed}
        </p>
        <p className="col-sm-12 col-md-12 col-lg-4">
          Uncompleted: {this.props.uncompleted}
        </p>
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

export default connect(mapStateToProps)(TodoFooter);
