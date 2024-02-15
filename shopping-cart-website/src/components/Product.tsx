import React from "react";
import { Post } from "../pages/Home";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../pages/Cart";
import { add, remove } from "../redux/Slices/cartSlice";

interface ProductProps {
  post: Post;
}

const Product: React.FC<ProductProps> = ({ post }) => {
  const { cart } = useSelector((state: RootState) => state);
  const disptach = useDispatch();

  const addToCart = () => {
    disptach(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    disptach(remove(post.id));
    toast.error("Item removed from cart");
  };
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="image1" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </button>
    </div>
  );
};

export default Product;
