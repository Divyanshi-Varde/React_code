import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Read from "./components/Read";
import "./App.css";
import { Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </div>
  );
};

export default App;
