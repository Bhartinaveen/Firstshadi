import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Signin from './Signin'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Spcl from './components/Spcl'
import Prsn from './components/Prsn'
import Pstst from './components/Pstst'
import Trst from './components/Trst'

// Home Page Composition
const HomePage = () => (
  <>
    <Landing />
    <Spcl />
    <Prsn />
    <Pstst />
    <Trst />
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
