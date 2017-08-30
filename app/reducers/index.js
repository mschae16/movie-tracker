import { combineReducers } from "redux";
import login from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';

const rootReducer = combineReducers({
  login,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess
});

export default rootReducer;
