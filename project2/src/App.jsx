import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Form from './components/Form'

function App() {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <Contact />
        <Form />
      </div>
    </>
  )
}

export default App
