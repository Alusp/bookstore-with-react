import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { ADDBOOKS } from '../redux/books/books';

const BooKFormInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const Addboooks = (element) => {
    element.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    if (title.length !== 0 && author.length !== 0) {
      dispatch(ADDBOOKS(book));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="container mx-auto p-6 mb-10 shadow-xl border rounded">
      <div className="" />
      <h2 className="text-2xl font-semibold text-gray-400 my-3">ADD NEW BOOK</h2>
      <form onSubmit={Addboooks} className="my-5 w-full">
        <input
          onChange={(element) => setTitle(element.target.value)}
          value={title}
          className="p-3 border rounded focus:outline-none border-sky-500 w-2/5"
          placeholder="Add Book Title"
          required
        />
        <input
          onChange={(element) => setAuthor(element.target.value)}
          value={author}
          className="p-3 border mx-8 w-2/5 border-sky-500 rounded focus:outline-none"
          placeholder="Add author"
          required
        />
        <button type="submit" className="py-3 px-10 rounded border bg-sky-600 text-white hover:text-white"> Add Book</button>
      </form>
    </div>
  );
};

export default BooKFormInput;
