import { combineReducers } from "redux";
import login from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createUserErred, createUserSuccess } from './create-user-reducer'

const rootReducer = combineReducers({
  login,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess,
  routing: routerReducer,
  createUserSuccess,
  createUserErred
});

export default rootReducer;
