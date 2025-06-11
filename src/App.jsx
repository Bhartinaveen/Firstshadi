import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Signin from './Signin'
import Frod from'./pages/Frod'
import Box from './pages/Box'
import Boxsc from'./pages/Boxsc'
import Rels from './pages/Rels'
import Terms from './pages/Terms'
import Priv from './pages/Priv'
import Refcan from './pages/Refcan'
import Cyb from './pages/Cyb'
import Memb from './pages/Memb'
import Mreg from './pages/Mreg'
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
          <Route path="/fraud" element={<Frod />} />
          <Route path="/box" element={<Box />} />
          <Route path="/boxsc" element={<Boxsc />} />
            <Route path="/rels" element={<Rels />} />
            <Route path="/terms" element={<Terms />} />
              <Route path="/priv" element={<Priv />} />
               <Route path="/ref" element={<Refcan />} />
               <Route path="/cyb" element={<Cyb />} />
               <Route path="/memb" element={<Memb />} />
               <Route path="/mreg" element={<Mreg />} />
               
      </Routes>
    </Router>
  )
}

export default App
