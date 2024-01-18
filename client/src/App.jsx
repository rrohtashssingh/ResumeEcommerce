import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotfound from './pages/PageNotfound';
import Login from './pages/auth/Login';
// import AdminDashboard from './pages/admin/AdminDashboard';
import ForgotPassword from './pages/auth/ForgotPassword';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/routes/AdminRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
        </Route>
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<PageNotfound />} />

      </Routes>
    </>
  )
}

export default App