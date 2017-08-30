import { combineReducers } from "redux";
import login from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  login,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess,
  routing: routerReducer
});

export default rootReducer;
