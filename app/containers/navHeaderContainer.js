import { connect } from 'react-redux';
import NavHeader from '../components/navheader/NavHeader';
import { signOutUser } from '../actions';

// logOutUser,
// createUserSignOut

const mapStateToProps = store => {
	return {
		loginSuccess:
			store.logOutUser !== ''
        ? store.loginSuccess
        : store.logOutUser,
		createUserSuccess:
			store.createUserSignOut.status !== ''
				? store.createUserSuccess.status
				: store.createUserSignOut
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSignOut: () => dispatch(signOutUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);
