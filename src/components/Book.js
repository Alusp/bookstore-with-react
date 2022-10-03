import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOKS } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const removebook = () => {
    dispatch(REMOVEBOOKS(id));
  };
  return (
    <>
      <div className="container mx-auto p-6 mb-10 shadow-xl border rounded">
        <div className="my-5 p-4 border flex justify-between items-center">
          <div className="">
            <div className="">
              <p>{category}</p>
              <p className="text-2xl font-bold ">{title}</p>
              <p className="">{author}</p>
            </div>

            <div className="my-5">
              <ul className="flex gap-10">
                <button type="button"><li>Comments</li></button>
                <div className="border-r-4" />
                <button type="button" onClick={removebook}><li>Remove</li></button>
                <div className="border-r-4" />
                <button type="button"><li>Edit</li></button>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="">
              <AiOutlineLoading3Quarters fontSize={45} color="#0290ff" />
            </div>
            <div className="">
              <p className="">
                79%
              </p>
              <p className="">Completed</p>
            </div>
          </div>
          <div className="" />
          <div className="">
            <div>
              <p>CURRENT CHAPTER</p>
              <p className="my-2">
                Chapter
                18
              </p>
            </div>
            <button className="py-2 px-5 rounded border bg-sky-600 text-white hover:text-white" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
