import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleBookMarks,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h3 className='text-3xl'>Blogs</h3>
            {
                blogs.map(blog=><Blog handleReadingTime={handleReadingTime} handleBookMarks={handleBookMarks} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookMarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}

export default Blogs;