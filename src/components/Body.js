import Restaurant from "./Restaurant"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Food_URL } from "../utilities/mocobot"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utilities/useOnlineStatus"


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
      console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      setListofRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRes(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
     }

     const OnlineStatus = useOnlineStatus()

     if( OnlineStatus=== false) return (<h1 className="online">You Have Poor internet Connection Check The Network Come Soon!!!!!</h1>)


     if(listofRestaurant.length === 0 ) {
      return <Shimmer/>
     }
   
    return(
       <div className="container">
       <div className="filter">
         <div className="search">
            <input type="text" 
            className="searchName" 
            value={searchtext} 
            onChange={(e) =>
            setSearchtext(e.target.value)}/>
            <button className="searchbtn" onClick={() =>{
              const filteredItems = listofRestaurant.filter((res) =>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
              setFilteredRes(filteredItems)
            }}>Search</button>
         </div>

         <button className="filter-btn" onClick={() => {
            const filtered = listofRestaurant.filter(
               (res) => res.info.avgRating >4
            )
         setFilteredRes(filtered)
         }}>
            Top Rated Restaurant
         </button>
       </div>
        <div className="flex-wrap">
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