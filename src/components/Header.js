import { useEffect, useState } from "react";
import { CDN_URL } from "../utilities/mocobot";
import { Link } from "react-router-dom";


const Header = () =>{

    const [btnName,SetBtnname]= useState("Login")


    return(
      <div className="header">
       <div className="logobar">
        <img className="logo"src={CDN_URL}/>
       </div>
       <h2 className="name">Jumba
           Foods
       </h2>
       <div className="navbar">
         <ul className="nav-item">
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About Us</Link></li>
         <li> <Link to="/contact">Contact</Link></li>
         <li> <Link to="/cart">Cart</Link></li>
          <button className="loginbtn" onClick={() => {
            btnName==="Login" 
            ? SetBtnname("Logout")
            : SetBtnname("Login")
            }} >{btnName}</button>
         </ul>
       </div>
      </div>
    )
 }

 export default Header;