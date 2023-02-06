import React from 'react'
import Discover from "./Discover";
import Navbar from "./Navbar";
import Arts from "./Arts"
import Group7 from "../Group7.svg"

function AllComponents() {
  return (
    <div>
     <div className="container">
    <Navbar />
    <Discover />
    <Arts />
   
  * </div> 
    <div className='image7'><img src={Group7} alt="" /></div>
    </div>
  )
}

export default AllComponents