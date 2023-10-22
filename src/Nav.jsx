import React from 'react'
import Logo from './logo.png'
const Nav = () => {
  return (
    <nav>
    <div className='logo'>
        <img src={Logo} alt='logo'/>
    </div>
    <div className='menu'>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservation</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Nav
