import React from "react";
import PropTypes from "prop-types";
import trashCan from "../images/trash-can.svg";

export default class TodoItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onUpdateTodoCompleted: PropTypes.func.isRequired,
    onUpdateTodoName: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name });
  }

  state = {
    name: this.props.name,
    editing: false
  };

  handleCompletedChange = () => {
    this.props.onUpdateTodoCompleted(this.props.id);
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleClick = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleDeleteClick = () => {
    this.props.onDeleteTodo(this.props.id);
  };

  handleSaveClick = () => {
    this.props.onUpdateTodoName(this.props.id, this.state.name);
    this.setState({ editing: !this.state.editing });
  };

  handleBlur = evt => {
    if (evt.relatedTarget === this.saveButton) {
      return;
    }
    this.setState({ name: this.props.name, editing: !this.state.editing });
  };

  checkBoxStyle = {
    marginTop: "7.5px"
  };

  trashCanStyle = {
    marginTop: "8.5px",
    marginLeft: "auto",
    width: "25px",
    height: "25px",
    filter: "invert(0.9)",
    cursor: "pointer"
  };

  renderItem() {
    return (
      <div className="row">
        <input
          className="form-control form-control-sm col-2"
          name={this.state.name}
          onChange={this.handleCompletedChange}
          checked={this.props.completed}
          type="checkbox"
          style={this.checkBoxStyle}
        />
        <label
          onClick={this.handleClick}
          className={this.props.completed ? "todo-completed col-8" : "col-8"}
        >
          {this.state.name}
        </label>
        <img
          className="col-2"
          src={trashCan}
          style={this.trashCanStyle}
          alt="delete"
          onClick={this.handleDeleteClick}
        />
      </div>
    );
  }

  renderEditableItem() {
    return (
      <div className="row">
        <input
          className="form-control form-control-sm col-2"
          name={this.state.name}
          onChange={this.handleCompletedChange}
          checked={this.props.completed}
          type="checkbox"
          style={this.checkBoxStyle}
        />
        <div className="input-group col-8 mt-1 p-0" onBlur={this.handleBlur}>
          <input
            id={`name-input-${this.props.id}`}
            className="form-control"
            aria-describedby={`save-button-addon-${this.props.id}`}
            type="text"
            name={this.state.name}
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <div className="input-group-append">
            <button
              id={`save-button-addon-${this.props.id}`}
              className="btn btn-primary"
              type="button"
              ref={node => (this.saveButton = node)}
              onClick={this.handleSaveClick}
            >
              Save
            </button>
          </div>
        </div>
        <img
          className="col-2"
          src={trashCan}
          style={this.trashCanStyle}
          alt="delete"
        />
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderEditableItem() : this.renderItem();
  }
}
