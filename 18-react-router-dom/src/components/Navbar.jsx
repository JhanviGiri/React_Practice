import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
       <div className="brand">
    <div className="logo"></div>
    <h2>React</h2>
</div>
        <div>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar