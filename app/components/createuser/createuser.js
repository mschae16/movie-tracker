import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class CreateUser extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			name: '',
			email: '',
			password: ''
		};
	}

	sendToStorage(user) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	captureUserData() {
		const user = {
			name: this.state.name.toLowerCase(),
			email: this.state.email.toLowerCase(),
			password: this.state.password
		};

		this.props.createUser(user);

		this.setState({ user: Object.assign({}, { email: user.email, password: user.password }) }, () => {
			this.setState({
				name: '',
				email: '',
				password: ''
			});
		})
	}

	render() {
		const { loginLogoutSuccess, createUserErred } = this.props;
		const { name, email, password } = this.state;
		const isDisabled =
			name === '' ? true : email === '' ? true : password === '' ? true : false;
		const finalUser = this.state.user
		let errorMessage


		if (createUserErred) {
			errorMessage = <h4 className="error-message">Email has already been used</h4>
		}

		if (loginLogoutSuccess === 'success') {
			this.sendToStorage(finalUser)
			return <Redirect to="/" />;
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

					{errorMessage}

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
					<input
						className="form-button"
						type="submit"
						value="Create User"
						disabled={isDisabled}
					/>
					<h4>
						Already have a login?{' '}
						<span className="form-prompt">
							<Link to="/login">Login Here.</Link>
						</span>
					</h4>
				</form>
			</div>
		);
	}
}

export default CreateUser;
