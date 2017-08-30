import React, { Component } from 'react';

class CreateUser extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	captureUserData() {

		const user = {
			name: this.state.name.toLowerCase(),
			email: this.state.email.toLowerCase(),
			password: this.state.password.toLowerCase()
		};
    console.log(this.props);
		this.props.createUser(user);
	}

	render() {
		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.captureUserData();
					}}
				>
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
					<input type="submit" value="Create User" />
				</form>
			</div>
		);
	}
}

export default CreateUser;
