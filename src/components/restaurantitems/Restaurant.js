import { IMG_URL } from "../../utilities/mocobot"



const Restaurant = (props) => {
    const {resData} = props

    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info
    return(
       <div className="w-60 p-2 m-5 mt-16 hover:cursor-pointer hover:border-solid bg-slate-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-700 duration-300 rounded-lg" >
       <img className="w-60 rounded-md" src={IMG_URL +  cloudinaryImageId}/>
       <h3 className="text-lg font-semibold">{name}</h3>
       <h5 style={{color: "rgb(75 85 99)"}}>{cuisines.join(", ")}</h5>
       <h4 className="text-cyan-950 font-semibold">{costForTwo}</h4>
       <h5 className="text-yellow-500">{avgRating}</h5>
       </div>
       
    )
 }

export default Restaurant