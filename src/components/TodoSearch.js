import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchTodo } from "../actions/actionCreaters";

class TodoSearch extends React.PureComponent {
  static propTypes = {
    search: PropTypes.string.isRequired,
    searchTodo: PropTypes.func.isRequired
  };

  handleChange = evt => {
    this.props.searchTodo(evt.target.value);
  };
  render() {
    return (
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
          placeholder="Search"
          value={this.props.search}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = {
  searchTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoSearch);
