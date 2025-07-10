// components/CartButton.js
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utilities/cartSlice";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const quantity = cartItems.find((i) => i.card.info.id === item.card.info.id)?.quantity || 0;

  const handleAdd = () => dispatch(addItem(item));
  const handleRemove = () => dispatch(removeItem(item));

  return quantity === 0 ? (
    <button
      className="rounded-lg bg-slate-100 shadow-lg px-4 py-2 font-medium absolute bottom-2 left-1/2 -translate-x-1/2"
      onClick={handleAdd}
    >
      ADD +
    </button>
  ) : (
    <div className="absolute flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg shadow-md bottom-2 left-1/2 -translate-x-1/2">
      <button className="font-bold px-2" onClick={handleRemove}>-</button>
      <span className="font-semibold">{quantity}</span>
      <button className="font-bold px-2" onClick={handleAdd}>+</button>
    </div>
  );
};

export default CartButton;
