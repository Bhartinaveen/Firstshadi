import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Spcl from './components/Spcl'
import Prsn from './components/Prsn'
import Pstst from'./components/Pstst'
import Trst from './components/Trst'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing/>
      <Spcl/>
      <Prsn/>
      <Pstst/>
      <Trst/>
    </>
  )
}

export default App
