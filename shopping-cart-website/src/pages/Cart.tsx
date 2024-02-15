import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export interface RootState {
  cart: any[];
}

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  // console.log(cart);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc: any, curr: any) => {
        return acc + curr.price;
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item: any, index: any) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items:{cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total Amount:${totalAmount}</p>
            <button>CheckOut Now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty!</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
