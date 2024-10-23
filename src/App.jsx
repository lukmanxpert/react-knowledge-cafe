import './App.css'
import Header from './components/header/Header'
import Posts from './components/posts/Posts'
import Bookmarks from './components/bookmarks/Bookmarks'
function App() {

  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12'>
      <Header></Header>
      <main className='flex'>
        <Posts></Posts>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  )
}

export default App
