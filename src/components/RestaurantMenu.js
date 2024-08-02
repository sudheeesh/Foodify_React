
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utilities/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"


const RestaurantMenu = () => {
    
    const { resId } = useParams()
    
    const resInfo = useRestaurantMenu(resId)

    const [showindex, setShowIndex] = useState(0)

    if (resInfo === null) return <Shimmer/>
   
    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.['@type'] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    

    return( 
        <div className="p-10 text-center">
            <h1 className="font-bold p-3 font-serif" >{name}</h1>
            <p className="font-medium mb-4 font-mono">
            {cuisines.join(", " )}-{costForTwoMessage}
            </p>

            <h4 className="underline font-thin mb-5">⁂M e n u⁂</h4>

             {categories.map((Category,index) => (
                <RestaurantCategory
                key={Category?.card?.card.title}
                 data={Category?.card?.card}
                 showitem={index === showindex ? true : false}
                 setShowIndex={() => (setShowIndex(index))} />
             ))}
        </div>
    )
}

export default RestaurantMenu