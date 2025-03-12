import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Minishop from './components/Minishop'
import About from './components/About'
import Notfound from './components/Notfound'

function App() {
  

  return (
    <>
     <Router>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Minishop/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>


     </Router>
    
    </>
  )
}

export default App
