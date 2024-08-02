import { useEffect, useState } from "react"
import { Menu_URL } from "../utilities/mocobot"


const useRestaurantMenu = (resId) => {

    const [resInfo,SetResInfo] = useState(null)
    
    useEffect(() => {
        fetchMenu()
    },[])
     
    const fetchMenu = async () => {
        const response = await fetch(Menu_URL + resId)
        const json = await response.json()   
        SetResInfo(json)
    };

    return (resInfo)

}

export default useRestaurantMenu;