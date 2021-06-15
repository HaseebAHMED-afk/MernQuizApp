import React from 'react'
import { Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import PublicRoute from './Components/PublicRoute'
import Home from './Views/Home'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <PublicRoute path='/' component={<Home />} />
      </Routes>
    </div>
  )
}

export default App
