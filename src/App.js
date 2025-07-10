import React, { Suspense, lazy, useEffect, useState } from "react"
import { useContext } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/heading/About"
import Contact from "./components/heading/Contact"
import Error from "./components/Error"
import Cart from "./components/cart/Cart"
import RestaurantMenu from "./components/restaurantitems/RestaurantMenu"
import { createBrowserRouter, RouterProvider,Outlet, useSearchParams }  from "react-router-dom"
import UserContext from "./utilities/UserContext"
import Footer from "./components/Footer"
import Loginpage from "./components/Loginpage"
import { Provider } from "react-redux"
import Payment from "./components/cart/payment";
import appStore from "./utilities/appStore"

// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import ("./components/heading/Grocery"))

const AppLayout = () =>{
   
   const [username, setUsername] = useState()

useEffect(() => {
   const data = {
      name: "Keerthana"
   }
   setUsername(data.name)
},[])

   return(
      <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:username}}>
      <div className="">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
      </UserContext.Provider>
      </Provider>
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
         { path: "/payment", 
          element: <Payment /> },
         {
            path:"/restaurants/:resId",
            element: <RestaurantMenu/>
          },

         //  {
         //    path:"/Login",
         //    element:<Loginpage/>
         //  }
      ],
      errorElement:<Error/>
   },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)