import { connect } from 'react-redux';
import { LoginAction } from '../actions';
import Login from '../components/login/login';

const mapStateToProps = (store) => {
  return {
    loginInfo: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginSubmit: (email, password) => {
      dispatch(LoginAction(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
