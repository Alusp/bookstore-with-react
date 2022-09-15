import React from 'react';
import Book from './Books';

function BookList() {
  return (
    <div className="flex flex-col">
      <Book title="Book 1" />
      <Book title="Book 2" />
      <Book title="Book 3" />
      <Book title="Book 4" />
      <Book title="Book 5" />
    </div>
  );
}

export default BookList;
