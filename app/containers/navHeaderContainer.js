import { connect } from 'react-redux';
import NavHeader from '../components/navheader/NavHeader';
import { loginLogoutSuccess, resetFavorites } from '../actions'

const mapStateToProps = store => {
	return {
		loginLogoutSuccess: store.loginLogoutSuccess.status,
    user: store.loginLogoutSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLogout: (user) => dispatch(loginLogoutSuccess(user)),
		resetFavorites: (array) => dispatch(resetFavorites(array))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
