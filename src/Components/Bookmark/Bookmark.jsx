
import PropTypes from 'prop-types'

const Bookmark = ({bookMark}) => {
    
    const {title}=bookMark;
    return (
        <div className=''>
            <h3 className='bg-slate-200 m-4  p-4 rounded font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookMark: PropTypes.object.isRequired
}
export default Bookmark;