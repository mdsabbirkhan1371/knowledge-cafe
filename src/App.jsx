
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const [bookMarks,setBookMarks]= useState([])

  const [readingTime,setReadingTime]=useState(0)

  const handleBookMarks=(blog)=>{
    
    const newBookMarks = [...bookMarks,blog]
    setBookMarks(newBookMarks)
  }

  const handleReadingTime =(id,time)=>{
    setReadingTime(readingTime+time)
    const remaining = bookMarks.filter(bookMark=>bookMark.id !==id)
    setBookMarks(remaining)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks readingTime={readingTime} bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
