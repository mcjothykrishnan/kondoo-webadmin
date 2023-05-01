import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/UserCreate"
import loginSlice from "../slices/SignIn"
import roleSlice from "../slices/UserRole"

const reducer = combineReducers({
  user: userSlice,
  login: loginSlice,
  role: roleSlice,
});

const store = configureStore({
  reducer,
});

export default store;
