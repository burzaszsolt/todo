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

export default connect(mapStateToProps)(TodoFooter);
