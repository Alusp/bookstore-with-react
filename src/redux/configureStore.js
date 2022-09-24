import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import catagoryReducer from './categories/categories';

const mainReducer = combineReducers({
  books: bookReducer,
  catagories: catagoryReducer,
});

const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk],
});

export default store;
