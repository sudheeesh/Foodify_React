import { useState } from "react"

const User = ({name}) => {

    const [count] = useState(0)
    
    return(
        <div className="user-card">
             <h1>count = {count}</h1>
             <h1>Name:{name}</h1>
             <h3>Location:Coimbatore</h3>
             <h4>Contact:@sudheeshdeepu</h4>
        </div>
    )
}

export default User