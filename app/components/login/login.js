import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			email: '',
			password: ''
		};
	}

	sendToStorage(user) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	constructUserObject() {
		const newUser = {
			email: this.state.email.toLowerCase(),
			password: this.state.password
		};

		this.setState({ user: newUser }, () => {
			this.setState({
					email: '',
					password: ''
				});
		})

		this.props.handleLogin(newUser);
	}

	render() {
		const { name, email, password } = this.state;
		const { loginHasErred } = this.props
		const isDisabled = email === '' ? true : password === '' ? true : false;
		const finalUser = this.state.user
		let errorMessage

		if (loginHasErred) {
			errorMessage = <h4 className="error-message">Email and Password invalid</h4>
		}

		if (this.props.loginLogoutSuccess === 'success') {
			this.sendToStorage(finalUser)
			return <Redirect to="/" />;
		}

		return (
			<div className="form-wrapper">
				<form
					onSubmit={e => {
						e.preventDefault();
						this.constructUserObject();
					}}
				>
					<h2>Login to MovieTracker</h2>
					{errorMessage}
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
					<input
						className="form-button"
						type="submit"
						value="Login"
						disabled={isDisabled}
					/>
					<h4>
						Dont have a login?{' '}
						<span className="form-prompt">
							<Link to="/createuser">Create User</Link>
						</span>
					</h4>
				</form>
			</div>
		);
	}
}

export default Login;
