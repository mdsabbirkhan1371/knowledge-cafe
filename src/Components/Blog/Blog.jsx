import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({blog,handleBookMarks}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog;

    return (
        <div>
            <img className='w-full mb-5' src={cover} alt={`This is Picture of ${title}`}/>
            <div className='flex justify-between mb-2'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-24' src={author_img} alt="" />
                    </div>
                    <div className='ml-4'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleBookMarks} className='text-2xl ml-2 text-red-600'><IoBookmarksOutline />
</button>
                </div>
            </div>

            <div className='m-5'>
                <h2 className='text-3xl'>{title}</h2>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a>#{hash}</a></span>)
                }
            </div>
        </div>
    );
};

Blog.propTypes = {
    
    blog: PropTypes.object.isRequired
}
export default Blog;