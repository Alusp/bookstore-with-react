import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function NavigationBar() {
  return (
    <nav className="py-6 shadow-md">
      <div className=" items-center bg-blue-500 text-white p-5">
        <h1 className="text-2xl font-semibold">Bookstore CMS</h1>
        <div className="flex">
          <Link to="/" className="flex-none w-14 h-14 text-xl font-semibold mx-10 ">Books</Link>
          <Link to="/author" className=" flex-initial w-64 text-xl font-semibold mx-2">Author</Link>
          <FaUser className="text-2xl font-semibold mx-2" />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
