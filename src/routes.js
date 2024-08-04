import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import About from "./modules/home/pages/about";



function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;