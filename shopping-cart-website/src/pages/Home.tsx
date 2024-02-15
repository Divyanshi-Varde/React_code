import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

type LoadingType = boolean;
type PostsType = Post[] | undefined;

const Home = () => {
  const API_URL: string = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState<LoadingType>(false);
  const [posts, setPosts] = useState<PostsType>();

  async function fetchProducts(): Promise<any> {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts && posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Data Found!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
