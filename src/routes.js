import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import About from "./modules/home/pages/about";
import ForYou from "./modules/home/pages/foryou";



function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/for-you" exact element={<ForYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;