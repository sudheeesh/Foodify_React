import { IMG_URL } from "../../utilities/mocobot";


const CartItemList = ({ items = []}) => {
  return (
    <div className="space-y-4">
      {items.map((items, index) => {
        const info = items.card.info;

        return (
          <div
            key={`${info.id}-${index}`}
            className="flex items-center gap-4 border p-4 rounded-md shadow-sm"
          >
            <img
              src={IMG_URL + info.imageId}
              alt={info.name}
              className="w-16 h-16 rounded object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{info.name}</h3>
              <p className="text-sm text-gray-600">
                ₹{(info.price || info.defaultPrice) / 100}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemList;
