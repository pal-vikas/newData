import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import {Routes, Route} from "react-router-dom"
import Request from './components/Request'
import Error from './components/Error'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/request' element={<Request/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
