import React from 'react'
import "./Navbar.css"
import Vector from "../../Vector.svg"


function Navbar() {
  return (
    <>
    <nav className='navContainer'>
      <div className='logoDiv'>
       <div className='logo'><img src={Vector} alt="" /></div> 
        <div className='artisto'><h1>Artisto</h1></div>

      </div>

      <div className='navLinks'>
        <ul>
          <li><a href="Events">Events</a></li>
          <li><a href="Museum">Museum</a></li>
          <li><a href="Arts">Arts</a></li>
          <li><a href="Gallaries">Gallaries</a></li>
        </ul>
        <div className='login'>
          <div className='whiteContainer'></div>
          <div className='yellowContainer'><h1>Login</h1></div>
        </div>

        <div className='explore'>
          <div className='yellowContainer2'></div>
          <div className='whiteContainer2'><h1>Explore arts</h1></div>
        </div>
      </div>
      
    </nav>
    </>
  )
}

export default Navbar