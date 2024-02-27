import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';
import expensesReducer from './expensesReducer'; // Add expensesReducer import here
import themeReducer from './themeReducer'; // Add themeReducer import here


const store = configureStore({
  reducer: { 
    counter: counterReducer,
    auth: authReducer, 
    expenses: expensesReducer,
    theme: themeReducer, // Add theme reducer to the store
  },
});


export default store;
