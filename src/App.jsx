import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
