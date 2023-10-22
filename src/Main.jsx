import React from 'react'
import Food1 from './food-1.jpg';
const Main = () => {
  return (
    <main>
      <div className="main-upper">
        <h2>This weeks special</h2>
        <a href="#" role='button'>Online Menu</a>
      </div>
      <div className="main-bottom">
        <div className="menu-card">
          <img src={Food1} alt="" srcset="" />
          <div className="menu-card-title">Greek Salad <span className='menu-price'>$12.99</span></div>
          <div className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <a href="#" className="order">Order now</a> 
        </div>

        <div className="menu-card">
          <img src={Food1} alt="" srcset="" />
          <div className="menu-card-title">Greek Salad <span className='menu-price'>$12.99</span></div>
          <div className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <a href="#" className="order">Order now</a> 
        </div>

        <div className="menu-card">
          <img src={Food1} alt="" srcset="" />
          <div className="menu-card-title">Greek Salad <span className='menu-price'>$12.99</span></div>
          <div className="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <a href="#" className="order">Order now</a> 
        </div>


      </div>
    </main>
  )
}

export default Main
