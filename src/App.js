import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Homepage</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
