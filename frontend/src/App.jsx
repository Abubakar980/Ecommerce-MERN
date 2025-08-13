import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
