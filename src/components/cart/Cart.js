import { useDispatch, useSelector } from "react-redux"
import Itemlist from "../restaurantitems/Itemlist"
import { clearCart } from "../../utilities/cartSlice"




const Cart = () => {

    
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
          dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
            <button className="p-2 m-2 bg-rose-500 text-white rounded-lg" onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && (
                <h1>Cart is empty! Please add some items</h1>
            )}
            <Itemlist item={cartItems}/>
        </div>
        </div>
    )
}

export default Cart