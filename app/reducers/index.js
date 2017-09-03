import { combineReducers } from "redux";
import { loginLogoutSuccess, loginHasErred } from "./login-reducer";
import { fetchHasErred, fetchIsLoading, fetchDataSuccess } from './fetch-reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createUserErred, createUserSuccess } from './create-user-reducer'
import { logOutUser, createUserSignOut } from './sign-out-reducer'
import { addToFavesErred } from './add-faves-reducer'
import { removeFavesErred } from './remove-faves-reducer'
import { retrieveFavesSuccess } from './retrieve-faves-reducer.js'

const rootReducer = combineReducers({
  loginLogoutSuccess,
  loginHasErred,
  fetchHasErred,
  fetchIsLoading,
  fetchDataSuccess,
  createUserErred,
  addToFavesErred,
  retrieveFavesSuccess,
  routing: routerReducer
});

export default rootReducer;
