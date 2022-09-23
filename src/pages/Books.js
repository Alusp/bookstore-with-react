import React from 'react';
import BookList from '../components/BookList';
import BooKFormInput from '../components/BooKFormInput';

function Books() {
  return (
    <div className="flex flex-col">
      <BookList />
      <BooKFormInput />
    </div>
  );
}

export default Books;
