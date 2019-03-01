import React from "react";
import PropTypes from "prop-types";

export default class TodoItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onUpdateTodoCompleted: PropTypes.func.isRequired,
    onUpdateTodoName: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
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

  renderItem() {
    return (
      <div className="row">
        <input
          className="form-control form-control-sm col-3"
          name={this.state.name}
          onChange={this.handleCompletedChange}
          checked={this.props.completed}
          type="checkbox"
          style={this.checkBoxStyle}
        />
        <label
          onClick={this.handleClick}
          className={this.props.completed ? "todo-completed col-9" : "col-9"}
        >
          {this.state.name}
        </label>
      </div>
    );
  }

  renderEditableItem() {
    return (
      <div className="row">
        <input
          className="form-control form-control-sm col-3"
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
      </div>
    );
  }

  render() {
    return this.state.editing ? this.renderEditableItem() : this.renderItem();
  }
}
