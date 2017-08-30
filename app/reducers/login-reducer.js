const login = (state = {}, action) => {
	switch (action.type) {
		case 'LOG_IN': {
			return Object.assign({ state }, { email: action.email, password: action.password });
		}
		default:
			return state;
	}
};

export default login;
