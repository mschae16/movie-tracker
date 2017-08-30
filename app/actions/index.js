export const LoginAction = (email, password) => {
	return {
		type: 'LOG_IN',
		email,
		password
	};
};

export const fetchHasErred = bool => {
	return {
		type: 'FETCH_HAS_ERRED',
		hasErred: bool
	};
};

export const fetchIsLoading = bool => {
	return {
		type: 'FETCH_IS_LOADING',
		isLoading: bool
	};
};

export const fetchDataSuccess = data => {
	return {
		type: 'FETCH_DATA_SUCCESS',
		data
	};
};

export const fetchData = url => {
	return dispatch => {
		dispatch(fetchIsLoading(true));

		fetch(url)
			.then(response => {
				if (response.status >= 400) {
					dispatch(fetchHasErred(true));
				}

				dispatch(fetchIsLoading(false));

				return response;
			})
			.then(response => response.json())
			.then(parsedResponse =>
				dispatch(fetchDataSuccess(parsedResponse.results))
			)
			.catch(() => dispatch(fetchHasErred(true)));
	};
};

export const createUserErred = bool => {
	return {
		type: 'CREATE_USER_ERRED',
		createUserErred: bool
	};
};

export const createUserSuccess = newUser => {
	return {
		type: 'CREATE_USER_SUCCESS',
		newUser
	};
};

export const createUser = newUser => {
	return dispatch => {
		fetch('http://localhost:3000/api/users/new', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(parsedResponse => dispatch(createUserSuccess(parsedResponse)))
			.catch(() => dispatch(createUserErred(true)));
	};
};
