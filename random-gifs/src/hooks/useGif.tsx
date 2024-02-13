import { useState, useEffect } from "react";
// import axios from "axios";

const API_KEY: string | undefined = process.env.REACT_APP_GIPHY_API_KEY;
const url: string = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

interface GifData {
  data: {
    images: {
      downsized_large: {
        url: string;
      };
    };
  };
}

const useGif = (
  tag: string
): {
  gif: string;
  loading: boolean;
  getData: (tag: string) => Promise<void>;
} => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  // async function getData(tag) {
  //   setLoading(true);
  //   const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
  //   const result = await data.json();
  //   const imageSource = result.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  async function getData(tag: string): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch(tag ? `${url}&tag=${tag}` : url);
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: GifData = await response.json();
      console.log(result);
      const imageSource: string = result.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData("");
  }, []);

  return { gif, loading, getData };
};

export default useGif;
