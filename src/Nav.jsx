import React from 'react'
import Logo from './logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
    <div className='logo'>
        <img src={Logo} alt='logo'/>
    </div>
    <div className='menu'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li>
          <Link to='/booking'>Reservation</Link>
        </li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Nav
