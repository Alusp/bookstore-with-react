import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
