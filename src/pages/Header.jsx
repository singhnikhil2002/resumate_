import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <a href="/">Home</a>
      <ul className='header__items'>
        <li><a href="/resume">Resume</a></li>
        <li><a href="#">Guide</a></li>
        <li><a href="/signUp">SignUp</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  )
}

export default Header
