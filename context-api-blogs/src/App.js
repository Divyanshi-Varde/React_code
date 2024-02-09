import React, { useContext, useEffect } from "react";
import Header from "./components/Header.jsx";
import Blogs from "./components/Blogs.jsx";
import Pagination from "./components/Pagination.jsx";
import { AppContext } from "./context/AppContext.js";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
