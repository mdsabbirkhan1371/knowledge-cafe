
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  const [bookMarks,setBookMarks]= useState([])

  const handleBookMarks=(book)=>{
    console.log('adding bookin in book mark')
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMarks={handleBookMarks}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
