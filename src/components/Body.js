import Restaurant from "./restaurantitems/Restaurant"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Food_URL } from "../utilities/mocobot"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utilities/useOnlineStatus"
import Footer from "./Footer"
import React from "react"


const Body = () => {

   const [listofRestaurant,setListofRestaurant] = useState([])
   const [filteredRes,setFilteredRes] = useState([])

   const [searchtext,setSearchtext] = useState("")

   useEffect(() => {
      fetchData()
   }, [])

     const fetchData = async () => {
      const response = await fetch(Food_URL)
      const json = await response.json()
      setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

     const OnlineStatus = useOnlineStatus()

     if( OnlineStatus=== false) return (<h1 className="online">You Have Poor internet Connection Check The Network Come Soon!!!!!</h1>)


     if(listofRestaurant.length === 0 ) {
      return <Shimmer/>
     }
   
    return(
       <div className="p-10 bg-slate-300 bg-[url('https://cdn.pixabay.com/photo/2018/08/22/13/58/grapes-3623694_1280.jpg')] bg-cover w-full h-full bg-no-repeat">
       <div className="flex justify-between">
         <div>
            <input type="text" 
            className=" rounded-md shadow-slate-500 text-xl py-1" 
            value={searchtext} 
            onChange={(e) =>
            setSearchtext(e.target.value)}/>
            <button className="px-7 bg-lime-400 caret-violet-50 border-none text-2xl ml-6 rounded-lg font-medium font-serif hover:text-cyan-300 hover:bg-slate-200" onClick={() =>{
              const filteredItems = listofRestaurant.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
              setFilteredRes(filteredItems)
            }}>Search</button>
         </div>

         <button className="w-1/5 max-w-52 px-1 py-2 text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md font-medium font-serif hover:bg-slate-100" onClick={() => {
            const filtered = listofRestaurant.filter(
               (res) => res.info.avgRating >4
            )
         setFilteredRes(filtered)
         }}>
            Top Rated Restaurant
         </button>
       </div>
        <div className="flex flex-wrap">
       {
          filteredRes?.map((restaurant,id) => (
           <Link key={id} to={"./restaurants/" + restaurant.info.id}> 
           <Restaurant resData={restaurant}/></Link>
           ) )
       } 
        </div>
       </div>
    )
 }

export default Body