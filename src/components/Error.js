import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError

    console.log(err)
    return(
        <div>
            <h1>Opps ne thedavendiyathu ithu illada Venna!!!!</h1>
            <h4>Mooditu Olunga Thedu</h4>
            <h5>{err.status}</h5>
        </div>
    )
}

export default Error