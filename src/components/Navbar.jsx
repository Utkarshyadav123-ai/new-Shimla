import React from 'react'
import log from "../assets/logo.png";
function Navbar() {
  return (
   <nav className="bg-amber-300 text-white flex flex-row justify-around w-full ">
       <img src={log} className=" ml-5" style={{width:"100px",height:"100px"}}/>
    <h2 className="text-3xl p-5 ml-15 text-pink-500"><strong>Shimla Travels</strong></h2>
    <ul className="flex gap-6 text-3xl mt-4">
        <li>
            <a href ="/">Home</a>
        </li>
         <li>
            <a href ="/about">About</a>
        </li>
          <li>
            <a href ="/packages">Packages</a>
        </li>
         <li>
            <a href ="/latest">LatestVisit</a>
        </li>
         <li>
            <a href ="/contact">Contact</a>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar;
