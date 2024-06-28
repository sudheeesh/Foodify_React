import { useEffect, useState } from "react"
import { Menu_URL } from "../utilities/mocobot"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"


const RestaurantMenu = () => {

    const [resInfo, SetResInfo] = useState(null)
    
    const { resId } = useParams()
    

    useEffect(() => {
        fetchMenu()
    },[])
     
    const fetchMenu = async () => {
        const response = await fetch(Menu_URL + resId)
        const json = await response.json()
        console.log(json)   
        SetResInfo(json)
    };

    if (resInfo === null) return <Shimmer/>
   
    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return( 
        <div className="menuapp">
            <h1>{name}</h1>
            <p>
            {cuisines.join(", " )}-{costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => 
                <li key={item.card.info.id}>
                    {item.card.info.name}-{"Rs "} 
                {item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu