/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';

export const store = configureStore({
  rootReducer,
});
