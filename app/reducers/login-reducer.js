const login = (store = [], action) => {
  switch (action.type) {
    case "LOG_IN": {
      return [
        ...store,
        { username: action.username, password: action.password }
      ];
    }

    default:
      return store;
  }
};
