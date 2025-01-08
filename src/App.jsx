import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Contact from './components/ContactUs/Contact'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Home /></>} />
        <Route path="/contact-us" element={<><Header/><Contact /></>} />
        <Route path="/about-us" element={<><Header/><AboutUs /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App