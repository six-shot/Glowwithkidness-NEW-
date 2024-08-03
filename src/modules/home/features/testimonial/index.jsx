import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { PiHairDryer } from "react-icons/pi";
export default function Testimonial() {
  return (
    <div className="relative w-full h-[100vh] flex items-center" id="home">
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="max-w-[1440px] mx-auto pt-[5%] px-[5%]">
          <div className="flex items-center justify-center flex-col mb-[5%]">
            <h5 className="tracking-[3px] font-medium">OUR CLIENTS</h5>

            <h4 className="text-[40px] font-medium">GLowithkindness Customers</h4>
          </div>
          <div className="relative bg-primary w-full flex justify-center items-center flex-col h-[350px]  px-[5%]">
            <div className="absolute -top-[15%] flex items-center w-full justify-center ">
              <div className="bg-white hover:bg-primary p-2 rounded-full">
                <div className="w-[80px] h-[80px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
            </div>
            <h4 className="text-center italic text-[24px] mt-[4%]">
              “For a couple of times, I've been going to Kindness for my braids.
              I will continue to visit her no matter where I travel in the city.
              She does a fantastic job!”
            </h4>
            <div className="mt-[7%] text-center">
              {" "}
              <h5 className="text-[20px]">Rosemary Ajayi</h5>
              <h6 className="uppercase text-xs mt-[4%]">Sweetheart</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary h-screen  opacity-40 z-[10] "></div>
    </div>
  );
}
