import React from "react";
import PropTypes from "prop-types";

export default class TodoItem extends React.PureComponent {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const checkBoxStyle = {
      marginTop: "7.5px"
    };

    return (
      <div className="row">
        <input
          className="form-control form-control-sm col-3"
          name={this.props.name}
          onChange={this.props.updateTodo}
          checked={this.props.completed}
          type="checkbox"
          style={checkBoxStyle}
        />
        <label className="col-9">{this.props.name}</label>
      </div>
    );
  }
}
