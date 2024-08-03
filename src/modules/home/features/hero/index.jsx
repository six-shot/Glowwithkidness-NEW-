import React from "react";
import Navbar from "../navbar";
import {Slider} from "../slider/index"


export default function Hero() {
  return (
    <div >
      <div className="relative w-full  overflow-x-hidden ">
      <Navbar/>
        <Slider />
     
      </div>
    </div>
  );
}
