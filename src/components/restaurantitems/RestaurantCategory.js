import { useState } from "react";
import Itemlist from "./Itemlist"; 


const RestaurantCategory = ({data,showitem,setShowIndex}) => {


    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className=" w-8/12 mx-auto my-4 p-4 shadow-md cursor-pointer  ">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold font-serif text-lg">{data.title}
                ({data.itemCards.length})
            </span>
            <span>∨</span>
            </div>
           {showitem && <Itemlist item={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;