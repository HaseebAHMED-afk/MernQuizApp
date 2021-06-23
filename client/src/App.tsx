import React from 'react'
import { Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import PublicRoute from './Components/PublicRoute'
import Home from './Views/Home'
import Footer from './Components/Footer'
import Login from './Views/Login'
import Register from './Views/Register'
import ContactUs from './Views/ContactUs'
import HowItWorks from './Views/HowItWorks'
import Profile from './Views/Profile'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <PublicRoute path='/' component={<Home />} />
        <PublicRoute path='/login' component={<Login />} />
        <PublicRoute path='/register' component={<Register />} />
        <PublicRoute path='/how-it-works' component={<HowItWorks />} />
        <PublicRoute path='/contact-us' component={<ContactUs />} />
        <PublicRoute path='/profile' component={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
