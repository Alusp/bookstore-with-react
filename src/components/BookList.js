import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Categories from '../pages/Categories';

function BookList() {
  const allBooks = useSelector((state) => state.booksReducer);
  return (
    <div className="flex flex-col">
      {
        allBooks.length ? (
          allBooks.map((book) => (
            <div key={book.id}>
              <Book
                id={book.id}
                key={book.id}
                title={book.title}
                author={book.author}
              />
              <Categories
                id={book.id}
                key={book.id}
                author={book.author}
              />
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-xl font-semibold">No Books</h2>
          </div>
        )
      }

    </div>
  );
}

export default BookList;
