import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removedBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removedBook({ id }));
  };
  return (
    <div className="my-5 border flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h2 className="text-xl font-semibold">{author}</h2>
      <button onClick={handleRemoveBook} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Remove
      </button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
