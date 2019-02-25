import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChangeHandler = evt => {
    this.setState({ ...this.state, value: evt.target.value });
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
            <p style={pStyle}>
              Uncompleted: {this.props.all - this.props.completed}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const filterTodos = (todos, type) => {
  switch (type) {
    case "all": {
      return todos.length;
    }
    case "completed": {
      return todos.filter(todo => todo.completed).length;
    }
    default:
      return todos.length;
  }
};

const mapStateToProps = state => {
  return {
    completed: filterTodos(state.todos, "completed"),
    all: filterTodos(state.todos)
  };
};

TableFooter.propTypes = {
  completed: PropTypes.number.isRequired,
  all: PropTypes.number.isRequired
};

const TableFooterContainer = connect(mapStateToProps)(TableFooter);

export default TableFooterContainer;
