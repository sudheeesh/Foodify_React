import { useEffect, useState } from "react";
import { CDN_URL } from "../utilities/mocobot";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";


const Header = () =>{

    const [btnName,SetBtnname]= useState("Login")


    const OnlineStatus = useOnlineStatus()

    return(
      <div className="">
       <div className="">
        <img className="w-80"src={CDN_URL}/>
       </div>
       <h2 class="">Jumba
           Foods
       </h2>
       <div className="">
         <ul className="nav-item">
          <li>Online :{OnlineStatus ?"✅" : "❌"}</li>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About Us</Link></li>
         <li> <Link to="/contact">Contact</Link></li>
         <li> <Link to="/grocery">Grocery</Link></li>
         <li> <Link to="/cart">Cart</Link></li>
          <button className="logi" onClick={() => {
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