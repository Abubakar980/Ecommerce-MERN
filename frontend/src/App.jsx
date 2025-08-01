import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage} from './Routes.js'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App







// tailwind.config.js
// yha sy cheezay copy paste krni hy


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   mode: "jit",
//   theme: {
//     fontFamily: {
//       Roboto: ["Roboto", "sans-serif"],
//       Poppins: ['Poppins', "sans-serif"],
//     },
//     extend: {
//       screens: {
//         "1000px": "1050px",
//         "1100px": "1110px",
//         "800px": "800px",
//         "1300px": "1300px",
//         "400px":"400px"
//       },
//     },
//   },
//   plugins: [],
// };