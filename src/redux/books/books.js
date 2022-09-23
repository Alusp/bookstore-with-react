import { v4 as uuidv4 } from 'uuid';

const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';

const initialState = [

  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
  },
  {
    id: uuidv4(),
    title: 'The Little Prince',
  },
  {
    id: uuidv4(),
    title: 'The Hobbit',
  },
  {
    id: uuidv4(),
    title: 'And Then There Were None',
  },
  {
    id: uuidv4(),
    title: 'Dream of the Red Chamber',
  },
];
export const removedBook = (payload) => (
  {
    type: BOOK_REMOVED,
    payload,
  }
);
export const addedBook = (payload) => (
  {
    type: BOOK_ADDED,
    payload,
  }
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    case BOOK_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default reducer;
