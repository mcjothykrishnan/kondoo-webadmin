import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/UserCreate"


const reducer = combineReducers({
  user: userSlice
});

const store = configureStore({
  reducer,
});

export default store;
