import React, { Component } from "react";
import { Redirect } from 'react-router'

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  captureUserData() {
    const user = {
      name: this.state.name.toLowerCase(),
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };
    this.props.createUser(user);

    this.setState({
      name: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { loginLogoutSuccess } = this.props
    if (loginLogoutSuccess === 'success') {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className="form-wrapper">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.captureUserData();
          }}
        >
          <h2>Sign-Up for MovieTracker</h2>

          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input className="form-button" type="submit" value="Create User" />
          <h4>Already have a login? <span className="form-prompt">Login here.</span></h4>
        </form>
      </div>
    );
  }
}

export default CreateUser;
