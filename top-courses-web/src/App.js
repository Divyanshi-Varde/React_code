import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
      <div >
        <Filter filterData={filterData}  category={category} setCategory={setCategory}/>
      </div>

      <div>{loading ? <Spinner /> : <Cards courses={courses} category={category} />}</div>
      </div>
    </div>
  );
};

export default App;
