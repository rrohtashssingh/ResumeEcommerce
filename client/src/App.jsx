import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotfound from './pages/PageNotfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<PageNotfound />} />

      </Routes>
    </>
  )
}

export default App