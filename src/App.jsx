
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const [bookMarks,setBookMarks]= useState([])

  const handleBookMarks=(blog)=>{
    console.log(blog)
    const newBookMarks = [...bookMarks,blog]
    setBookMarks(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
