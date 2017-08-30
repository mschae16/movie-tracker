import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	render() {
		const { handleLoginSubmit } = this.props;

		return (
			<div>
				<form
					onSubmit={ e => {
						e.preventDefault();
						handleLoginSubmit(this.state.email, this.state.password);
					}}
				>
					<input
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={e => this.setState({ email: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Password"
						value={this.state.password}
						onChange={e => this.setState({ password: e.target.value })}
					/>
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

export default Login;
