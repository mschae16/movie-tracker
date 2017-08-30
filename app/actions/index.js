export default const LoginAction = (username, password) => {
  return {
    type: 'LOG_IN',
    username,
    password
  }
}
