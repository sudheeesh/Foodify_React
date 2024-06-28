import { IMG_URL } from "../utilities/mocobot"

const Restaurant = (props) => {
    const {resData} = props
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info
    return(
       <div className="ress" style={{background:"#f0f0f0"}} >
       <img className="res-img" src={IMG_URL +  cloudinaryImageId}/>
       <h3 style={{color: "rgb(2 6 23)"}}>{name}</h3>
       <h5 style={{color: "rgb(75 85 99)"}}>{cuisines.join(", ")}</h5>
       <h4 style={{color:"rgb(250 204 21)"}}>{costForTwo}</h4>
       <h5 className="place" style={{color: "rgb(2 6 23)"}}>{avgRating}</h5>
       </div>
       
    )
 }

export default Restaurant