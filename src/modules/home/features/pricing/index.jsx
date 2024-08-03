import React from "react";
import { FaCheckCircle } from "react-icons/fa";
export default function Pricing() {
  return (
    <div className="relative w-full h-[100vh]" id="home">
      <img
        className="absolute  object-cover left-0 w-full h-full z-10"
        src="/pricing.jpg"
      />
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="max-w-[1440px] mx-auto pt-[5%] px-[5%]">
          <div className="flex gap-2 items-center">
            <h5 className="">EXPERIENCE WELLNEZ</h5>
            <h5 className="bg-primary px-5 py-1">25 YEARS</h5>
          </div>
          <h4 className="text-[40px] font-medium">Perfect Package</h4>
          <div className="grid grid-cols-7 gap-[50px] h-[500px] mt-[3%]">
            <div className="col-span-2 w-full h-full bg-white px-[8%] py-[5%] hover:border-b-[6px] border-primary">
              <div className="flex items-end justify-between">
                <h5 className="text-[40px] ">12$</h5>
                <h5 className="text-[24px]">Basic Plan</h5>
              </div>
              <h5 className="text-xs">BILLED MONTHYLY</h5>
              <img src="/price.png" className="mt-[8%] mb-[12%]" />
              <div className="flex gap-2 flex-col">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
              </div>
              <div className="flex justify-center mt-[20%]">
                <button className="px-8 py-3 bg-primary text-sm font-medium tracking-[3px]">
                  BOOK NOW
                </button>
              </div>
            </div>
            <div className="col-span-2 w-full h-full bg-white px-[8%] py-[5%] hover:border-b-[6px] border-primary">
              <div className="flex items-end justify-between">
                <h5 className="text-[40px] ">12$</h5>
                <h5 className="text-[24px]">Basic Plan</h5>
              </div>
              <h5 className="text-xs">BILLED MONTHYLY</h5>
              <img src="/price.png" className="mt-[8%] mb-[12%]" />
              <div className="flex gap-2 flex-col">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-sm">Mobile-Optimized</h5>
                  <FaCheckCircle className="text-primary text-[24px]" />
                </div>
              </div>
              <div className="flex justify-center mt-[20%]">
                <button className="px-8 py-3 bg-primary text-sm font-medium tracking-[3px]">
                  BOOK NOW
                </button>
              </div>
            </div>
            <div className="col-span-3 w-full h-full ">
              <div className="w-[400px] h-full  rounded-[250px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary h-screen  opacity-40 z-[10] "></div>
    </div>
  );
}
