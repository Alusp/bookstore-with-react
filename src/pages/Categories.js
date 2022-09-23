import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Categories() {
  const showOutPut = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();

  const showCategorBtn = () => {
    dispatch(checkStatusAction());
  };
  return (
    <div>
      <button onClick={showCategorBtn} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        check Status
      </button>
      <h2>{showOutPut}</h2>
    </div>
  );
}

export default Categories;
