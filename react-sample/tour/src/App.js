
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>hello</h1>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Home from './home'
import About from './About'
import Layout from './Layout'
import Service from './Service.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'

function App() {
  return (
    <div>
      <BrowserRouter>

      
      <Routes>
      <Route path='/' element={<Layout/>}>
{/* 
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/> */}
      </Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
