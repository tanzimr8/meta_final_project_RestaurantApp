import React from 'react'
import Food from './food.jpg'
const Header = () => {
  return (
    <header>
      <div className='header-left'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <a href='#' role='button'>Reserve a Table</a>
      </div>
      <div className='header-right'>
        <img src={Food} alt='food image'/>
      </div>
    </header>
  )
}

export default Header
