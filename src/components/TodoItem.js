import React from "react";
import PropTypes from "prop-types";

const checkBoxStyle = {
  marginTop: "7.5px"
};

const TodoItem = ({ onChange, completed, name }) => (
  <div className="row">
    <input
      className="form-control form-control-sm col-3"
      name={name}
      onChange={onChange}
      checked={completed}
      type="checkbox"
      style={checkBoxStyle}
    />
    <label className="col-9">{name}</label>
  </div>
);

TodoItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default TodoItem;
