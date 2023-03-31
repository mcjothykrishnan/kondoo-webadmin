import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/UserCreate"
import loginSlice from "../slices/SignIn"

const reducer = combineReducers({
  user: userSlice,
  login: loginSlice
});

const store = configureStore({
  reducer,
});

export default store;
