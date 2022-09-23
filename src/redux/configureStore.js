import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import checkStatus from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkStatus,
});

const store = configureStore({ reducer });

export default store;
