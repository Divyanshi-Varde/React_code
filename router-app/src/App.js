import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/> }>
          <Route index element={<Home/>}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="/about" element={<About /> }></Route>
          <Route path="*" element={ <NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
