import { useSelector, useDispatch } from 'react-redux';
import { CHECK } from '../redux/categories/categories';

const Catagories = () => {
  const output = useSelector((state) => state.catagories);
  const dispatch = useDispatch();

  const catagButton = () => {
    dispatch(CHECK());
  };
  return (
    <div className="">
      <button className="" type="button" onClick={catagButton}>check status</button>
      <h4>{output}</h4>
    </div>
  );
};

export default Catagories;
