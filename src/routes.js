import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./modules/home";
import About from "./modules/home/pages/about";
import ForYou from "./modules/home/pages/foryou";
import Contact from "./modules/home/pages/contact";
import HairGuide from "./modules/home/pages/hairguide";
import Booking from "./modules/home/pages/booking";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} >
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/for-you" exact element={<ForYou />} />
        <Route path="/contact-us" exact element={<Contact />} />
        <Route path="/hair-guide" exact element={<HairGuide />} />
        <Route path="/booking" exact element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
}

function Routess() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default Routess;
