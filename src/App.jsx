import React from 'react'
import './App.css'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Experience from './routes/Experience'
import About from './routes/About'
import {Route, Routes} from 'react-router-dom'
import Contacts from './routes/Contacts'
// import Skills from './routes/Skills'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/experience" element = {<Experience/>} />
        {/* <Route path = "/skill" element = {<Skills/>} /> */}
        <Route path = "/contacts" element = {<Contacts/>} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
      
    </>
  )
}

export default App
