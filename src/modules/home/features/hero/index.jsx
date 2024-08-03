import React from "react";
import Navbar from "../navbar";

import Banner from "../banner";
import { Slider } from "../slider";

export default function Hero() {
  return (
    <div >
      <div className="relative w-full  overflow-x-hidden ">
        <Navbar />
        <Slider />
     
      </div>
    </div>
  );
}
