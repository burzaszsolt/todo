import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/thunks";

class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  handleClick = () => {
    console.log("login");
    this.props.login();
  };

  render() {
    return (
      <div className="col-4 login">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <input
              className="form-control"
              placeholder="username"
              type="text"
            />
          </div>
          <div className="input-group">
            <input
              className="form-control"
              placeholder="password"
              type="password"
            />
          </div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary mt-2"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
