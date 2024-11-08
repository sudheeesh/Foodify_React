import React, { Suspense, lazy, useEffect, useState } from "react"
import { useContext } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider,Outlet, useSearchParams }  from "react-router-dom"
import UserContext from "./utilities/UserContext"
import Footer from "./components/Footer"
import Loginpage from "./components/Loginpage"

// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import ("./components/Grocery"))

const AppLayout = () =>{
   
   const [username, setUsername] = useState()

useEffect(() => {
   const data = {
      name: "Keerthana"
   }
   setUsername(data.name)
},[])

   return(
      <UserContext.Provider value={{loggedInUser:username}}>
      <div className="">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
      </UserContext.Provider>
   )
}

const appRouter = createBrowserRouter([
     
   {
      path: "/",
      element:<AppLayout/>,
      children: [
         {
            path: "/",
            element: <Body/>
         },
         {
            path: "/about",
            element: <About/>
         },
         {
            path: "/contact",
            element: <Contact/>
         },
         {
            path: "/Grocery",
            element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
         },
         {
           path:"/cart",
           element: <Cart/>
         },
         {
            path:"/restaurants/:resId",
            element: <RestaurantMenu/>
          },

          {
            path:"/Login",
            element:<Loginpage/>
          }
      ],
      errorElement:<Error/>
   },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)