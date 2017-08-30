import { connect } from 'react-redux';
import { createUser } from '../actions';
import CreateUser from '../components/createuser/createuser';

const mapStateToProps = store => {
	return {
		createdUserId: store.newUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createUser: user => {
			dispatch(createUser(user))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
