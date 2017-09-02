import { combineReducers } from "redux";
import { loginLogoutSuccess, loginHasErred } from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createUserErred, createUserSuccess } from './create-user-reducer'
import { logOutUser, createUserSignOut } from './sign-out-reducer'
import { addToFavesSuccess, addToFavesErred } from './add-faves-reducer'

const rootReducer = combineReducers({
  loginLogoutSuccess,
  loginHasErred,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess,
  createUserErred,
  addToFavesErred,
  routing: routerReducer
});

export default rootReducer;
