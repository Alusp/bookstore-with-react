import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function NavigationBar() {
  return (
    <nav className="py-6 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <h1 className="mr-16 text-4xl text-sky-500 font-semibold">BookStore</h1>
          <Link to="/" className="mt-2 w-14 h-14 text-xl font-semibold mx-10 text-gray-600">Books</Link>
          <Link to="/categories" className="text-gray-600 mt-2 w-64 text-xl font-semibold mx-2">Categories</Link>
        </div>
        <FaUser className="mt-3 text-2xl font-semibold mx-2 text-sky-600" />
      </div>
    </nav>
  );
}

export default NavigationBar;
