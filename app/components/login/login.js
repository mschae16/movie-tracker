import React, { Component } from "react";
import { Redirect } from "react-router";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  constructUserObject() {
    const user = {
      email: this.state.email.toLowerCase(),
      password: this.state.password.toLowerCase()
    };
    this.props.handleLoginSubmit(user);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    const { handleLoginSubmit } = this.props;

    if (this.props.loginSuccess === "success") {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <form
          className="login-form"
          onSubmit={e => {
            e.preventDefault();
            this.constructUserObject();
          }}
        >
          <input
            className="login-input"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input className="login" type="submit" value="Login" />
          <h4 className="login-message">Dont have a login? <span className="create-user">Create user.</span></h4>
        </form>
      </div>
    );
  }
}

export default Login;
