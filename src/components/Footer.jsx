import React from 'react'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { BaggageClaim } from 'lucide-react';
import log from "../assets/logo.png";


function Footer() {
  return (
    <div className="bg-black">
        <h2 className="text-white text-center text-6xl p-5">
          <strong>Footer</strong></h2>
          <div className="flex flex-row">
          <div className="plan  flex flex-col ml-20 p-10">
            <h2 className="text-5xl text-pink-500 ">Our Next Visit</h2>
            <h2 className="text-3xl p-3 text-white">Kashmir</h2>
            <h2 className="text-3xl p-3 text-white">Manali</h2>
            <h2 className="text-3xl p-3 text-white">Kasol</h2>
            <h2 className="text-3xl p-3 text-white">Sikkim</h2>
            <h2 className="text-3xl p-3 text-white">Kohima</h2>
          </div>
           <div className="plan  flex flex-col ml-20 p-10">
            <h2 className="text-5xl text-pink-500">Services</h2>
               <h2 className="text-3xl p-3 text-white">Train Ticket</h2>
                  <h2 className="text-3xl p-3 text-white">Flight Ticket</h2>
                     <h2 className="text-3xl p-3 text-white">Hotel </h2>
                        <h2 className="text-3xl p-3 text-white">Travel Fairs</h2>
                          <h2 className="text-3xl p-3 text-white">Food</h2>
             
              
            </div>
             <div className="plan  flex flex-col ml-20 p-10">
            <h2 className="text-5xl text-pink-500">Contacts</h2>
             <div className="flex flex-row p-3">
           <Phone size={30}  className="mt-2" color="white"/>
           <h2 className="text-3xl text-white ml-3">Phone</h2>
           </div>
           <div className="flex flex-row p-3">
           <Mail size={30}  className="mt-2" color="white"/>
           <h2 className="text-3xl text-white ml-3">Email</h2>
           </div>
           <div className="flex flex-row p-3">
           <Map size={30} className="mt-2"color="white"/>
           <h2 className="text-3xl text-white ml-3">Map</h2>
           </div>
           <div className="flex flex-row p-3">
           <Ticket size={30} className="mt-2"color="white"/>
           <h2 className="text-3xl text-white ml-3">Ticket</h2>
           </div>
           <div className="flex flex-row p-3">
           < BaggageClaim  size={30} className="mt-2"color="white"/>
           <h2 className="text-3xl text-white ml-3">Ticket</h2>
           </div>


            </div>
            <div className="plan  flex flex-col ml-20 p-10">
            <h2 className="text-5xl text-pink-500">Company Logo</h2>
            <img src={log} className="mt-10 ml-10" style={{width:"200px",height:"200px"}}/>
            </div>
            </div>
          </div>
  )
}

export default Footer
