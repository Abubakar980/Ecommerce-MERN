import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage} from './Routes.js'
import {SignUpPage} from './Routes.js'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App






// 1:00:00