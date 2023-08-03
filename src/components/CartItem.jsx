import { useDispatch } from "react-redux";
import { formatCurrency } from "../utils/formatCurrency";
import { TbTrashX } from "react-icons/tb";
import { removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="grid grid-cols-[10rem_auto_2.5rem] gap-5 bg-base-200 rounded-lg p-5">
      <div className="w-full h-full overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h4 className="text-2xl">{item.title}</h4>
        <p className="opacity-60">{item.description.substring(0, 100)}...</p>
        <p>Qty. {item.quantity}</p>
        <p>
          Price. {formatCurrency(item.price)} x {item.quantity} ={" "}
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={handleRemoveItem}
          className="text-2xl hover:text-rose-500 duration-300"
        >
          <span>
            <TbTrashX />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
