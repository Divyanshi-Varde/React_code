import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice"
import {toast} from "react-hot-toast"

interface CartItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  };
  itemIndex: number;
}



const CartItem:React.FC<CartItemProps> = ({ item, itemIndex }) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed!")
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image}  alt="image1"/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
