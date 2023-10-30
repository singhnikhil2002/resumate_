import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <a href="/">Home</a>
      <ul className='header__items'>
        <li><a href="/https://form-resumate.netlify.app/">Resume</a></li>
        <li><a href="https://roadmap.sh/">Guide</a></li>
        <li><a href="/signUp">SignUp</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </div>
  )
}

export default Header
