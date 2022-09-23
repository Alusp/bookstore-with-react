const CHECK_STATUS = 'bookStore/categories/STATUS';
const ADD_CATEGORY = 'bookStore/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookStore/categories/REMOVE_CATEGORY';

const initialState = [];
const checkStatus = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
      return state.filter((category) => category !== action.categoryId);
    default:
      return state;
  }
};

export const checkStatusAction = () => ({
  type: CHECK_STATUS,
});

export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});

export const removeCategory = (categoryId) => ({
  type: REMOVE_CATEGORY,
  categoryId,
});

export default checkStatus;
