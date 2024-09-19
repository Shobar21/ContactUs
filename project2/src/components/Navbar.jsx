import React from 'react'
import logo from '../images/Frame 2 1.png'
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul>
        <li href='#'>Home</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
