// components/Itemlist.js
import CartButton from "../cart/cartButton";
import { IMG_URL } from "../../utilities/mocobot";

const Itemlist = ({ item }) => {
  return (
    <div className="text-left">
      {item.map((items, index) => (
        <div
          key={`${items.card.info.id}-${index}`}
          className="p-2 m-2 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-6 font-medium">
              <span>{items.card.info.name}</span>
              <span>
                {" "} - ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs font-serif">{items.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 relative">
            <CartButton item={items} />
            <img
              src={IMG_URL + items.card.info.imageId}
              className="w-full rounded-lg"
              alt={items.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;