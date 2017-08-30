export const LoginAction = (email, password) => {
  return {
    type: 'LOG_IN',
    email,
    password
  }
}
