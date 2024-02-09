import { useState, useEffect } from "react";
// import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
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
  async function getData(tag) {
    setLoading(true);
    try {
      const response = await fetch(tag ? `${url}&tag=${tag}` : url);
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log(result);
      const imageSource = result.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { gif, loading, getData };
};

export default useGif;
