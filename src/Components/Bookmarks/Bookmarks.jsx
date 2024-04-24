
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readingTime}) => {
    
    return (
        <div className='md:w-1/3  bg-slate-300  m-5 p-5 rounded'>
            <h3 className='text-3xl m-4 bg-cyan-500 p-3 rounded'>Reading Time :{readingTime} </h3>
            <h4 className='text-3xl  m-5 p-3'>Bookmarks Items : {bookMarks.length}</h4>

            {
                bookMarks.map(bookMark=><Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
            }
           
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number 
}

export default Bookmarks;