import { useContext, useEffect, useState } from "react";
import { CDN_URL } from "../utilities/mocobot";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";




const Header = () =>{

    var [btnName,SetBtnname]= useState("Login")


    const OnlineStatus = useOnlineStatus()

    // const {loggedInUser} = useContext(UserContext)
    // selecting a portion of store so we use ⬇️
    const cartItems = useSelector((store) =>  store.cart.items);
  
    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
    

    return(
      <div className="flex justify-evenly  w-full h-24 z-0  box-border shadow-md bg-slate-200" >
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
          <li className="hover:text-cyan-600"> <Link to="/cart" className="relative flex items-center gap-1">Cart <ShoppingCart className="w-5 h-5" />
           {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>)} 
        </Link></li>
         </ul>
       </div>
      </div>
    )
 }

 export default Header;