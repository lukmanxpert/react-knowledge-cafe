import './App.css'
import Header from './components/header/Header'
import Posts from './components/posts/Posts'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarkBtn = post => {
    const newBookmarks = [...bookmarks, post];
    setBookmarks(newBookmarks);
  }
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12'>
      <Header></Header>
      <main className=''>
        <Posts handleBookmarkBtn={handleBookmarkBtn}></Posts>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
  )
}

export default App
