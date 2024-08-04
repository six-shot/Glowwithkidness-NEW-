import React from "react";
import { PiHairDryer } from "react-icons/pi";

export default function Services() {
  return (
    <div className="px-[5%] py-[5%]">
      <div>
        <div className="flex flex-col justify-center items-center text-center">
          <h6 className="text-base text-black font-medium uppercase">
            Hair guide
          </h6>
          <h4 className="sm:text-[40px] text-[30px] sm:leding-[40px] leading-[30px]">Protect your braids</h4>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 col-span-1 items-center  mt-[5%]">
        <div className="col-span-1">
          <div className="flex gap-5 flex-col">
            <div className="flex gap-7 items-center ">
              <div className="flex gap-4">
                <div className="flex flex-col justify-end items-end">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 text-right">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center ">
              <div className="flex gap-4">
                <div className="flex flex-col justify-end items-end">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 text-right">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center ">
              <div className="flex gap-4">
                <div className="flex flex-col justify-end items-end">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 text-right">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:my-0 my-[4%]">
          <div className="flex justify-center items-center">
            <img src="shape.png" alt="shape.png" />
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex gap-5 flex-col">
            <div className="flex gap-7 items-center ">
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col ">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 ">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center ">
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col ">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 ">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-7 items-center ">
              <div className="p-1 rounded-full border-dashed border border-primary">
                <div className="w-[100px] h-[100px] bg-primary rounded-full flex justify-center items-center">
                  <PiHairDryer className="text-[40px] text-white" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col ">
                  <h4 className="text-[24px]">Discover New</h4>
                  <p className="text-sm mt-3 ">
                    There are many variations of passages
                    <br /> gaks the majority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
