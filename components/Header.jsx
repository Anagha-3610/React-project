import React from 'react'
import { Link } from "react-router"
const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home </Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header