import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Login from '../components/login/login';

const mapStateToProps = (store) => {
  return {
    loginSuccess: store.loginSuccess,
    loginHasErred: store.loginHasErred
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginSubmit: (user) => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
