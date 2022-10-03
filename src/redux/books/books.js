/* eslint-disable no-param-reassign */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const FETCHBOOK = 'bookstore-app/books/FETCH_BOOKS';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9iN7MQlwShRCf2YHHv7E/books';

export const ADDBOOKS = createAsyncThunk(
  ADDBOOK,
  async (book) => {
    await axios.post(BOOKS_URL, book);
    return {
      book: [
        book.item_id,
        [{
          author: book.author,
          title: book.title,
          category: book.category,
        }],
      ],
    };
  },
);

export const REMOVEBOOKS = createAsyncThunk(REMOVEBOOK, async (id) => {
  await axios.delete(`${BOOKS_URL}/${id}`);
  return { id };
});

export const fetchBooks = createAsyncThunk(
  FETCHBOOK,
  async () => {
    const { data } = await axios.get(BOOKS_URL);
    return { books: Object.entries(data) };
  },
);

const initState = [];

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case `${FETCHBOOK}/fulfilled`:
      return action.payload.books;
    case `${ADDBOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVEBOOK}/fulfilled`:
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
