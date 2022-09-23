const BOOK_REMOVED = 'bookStore/books/BOOK_REMOVED';
const BOOK_ADDED = 'bookStore/books/BOOK_ADDED';

const initialState = [];
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
