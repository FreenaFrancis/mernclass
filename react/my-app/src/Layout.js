import React from 'react'
import './layout.css'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <img className='im' src='https://images.unsplash.com/photo-1522069394066-326005dc26b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'alt=''></img>
    <div className='NavBar'>
      <h1 className='logo'>INTIAL</h1>
      <ul style={{ textDdecoration: 'none',listStyle: 'none'}}>
          <li  className='link'><Link to={'/home'}>Home</Link></li>
          <li className='link'><Link to={'/about'}>About</Link></li>
          <li className='link'><Link to={'/service'}>Services</Link></li>
          <li className='link'><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
    <div className='content'>
      {/* <h1>Create Good Free Template</h1> */}
      <p>A free template by uicookies.com</p>
    <button style={{backgroundColor:'green'}}>Get Started</button>
    </div>
    {/* outlet is used to make changes in content by clicking diiferent page */}
    <Outlet/>  
  </div>
  )
}


export default Layout
