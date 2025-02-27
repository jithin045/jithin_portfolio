import { useState } from 'react'
import './bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  )
}

export default App
