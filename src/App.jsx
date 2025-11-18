import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
