
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks}) => {
    console.log(bookMarks)
    return (
        <div className='md:w-1/3  bg-slate-300  m-5 p-5 rounded'>
            <h4 className='text-3xl text-center m-5 p-3'>Bookmarks Items : {bookMarks.length}</h4>

            {
                bookMarks.map(bookMark=><Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
            }
           
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired, 
}

export default Bookmarks;