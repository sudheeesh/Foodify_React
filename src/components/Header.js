import { useContext, useEffect, useState } from "react";
import { CDN_URL } from "../utilities/mocobot";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import Restaurant from "./Restaurant";
import React from "react";



const Header = () =>{

    var [btnName,SetBtnname]= useState("Login")


    const OnlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)

    return(
      <div className="flex justify-between w-full h-24 z-0  box-border shadow-md bg-slate-200" >
       <div>
        <img className="w-[88] mt-1 ml-2 "src={CDN_URL}/>
       </div>
       <h2 className="px-3 font-extrabold text-4xl uppercase mt-7 bg-cover custom bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-purple-700 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Jumba
           Foods
       </h2>
       <div className=" flex items-center">
         <ul className="flex gap-10 cursor-pointer text-lg font-semibold font-sans ">
          <li className="hover:text-cyan-600">{OnlineStatus ?"✅" : "❌"}</li>  
          <li className="hover:text-cyan-600"> <Link to="/">Home</Link></li>
          <li className="hover:text-cyan-600"> <Link to="/about">About Us</Link></li>
          <li className="hover:text-cyan-600"> <Link to="/contact">Contact</Link></li>
          <li className="hover:text-cyan-600"> <Link to="/grocery">Grocery</Link></li>
          <li className="hover:text-cyan-600"> <Link to="/cart">Cart</Link></li>
         {/* <Link to="/login"> <button className="mr-5 bg-pink-600 px-4 rounded-xl text-gray-300 hover:text-cyan-600 hover:bg-slate-100  " onClick={() => {
            btnName==="Login" 
            ? SetBtnname("Logout")
            : SetBtnname("Login")
            }} >{btnName}
            </button>
            </Link> */}
            {/* <li className="mr-5">{loggedInUser}</li> */}
         </ul>
       </div>
      </div>
    )
 }

 export default Header;