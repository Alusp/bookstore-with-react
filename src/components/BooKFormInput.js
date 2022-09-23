import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addedBook } from '../redux/books/books';

function BooKFormInput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = () => {
    const newBook = {
      id: uuid(),
      title,
      author,
    };

    dispatch(addedBook(newBook));

    setTitle('');
    setAuthor('');
  };
  return (
    <div className="my-5 border flex justify-between items-center">
      <form>
        <h2 className="text-xl font-semibold">Add new Book</h2>
        <div className="flex flex-col">
          <input
            type="text"
            className="text-xl font-semibold"
            placeholder="Title Of Book"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="text-xl font-semibold"
            placeholder="Author Of Book"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          {/* <select onChange={(e) => setAuthor(e.target.value)}
          value={author} name="author" className="p-3 border mx-4 w-1/5">
            <option value="" className="my-2">Author</option>
            <option value="author1" className="my-2">Author 1</option>
            <option value="author2" className="my-2">Author 2</option>
            <option value="author3" className="my-2">Author 3</option>
            <option value="author4" className="my-2">Author 4</option>
            <option value="author5" className="my-2">Author 5</option>
          </select> */}
          <button onClick={addBookHandler} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Add Book </button>
        </div>
      </form>
    </div>
  );
}

export default BooKFormInput;
