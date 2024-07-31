import React from "react";
import { PiHairDryer } from "react-icons/pi";
export default function About() {
  return (
    <div className="px-[5%] ">
      <div className="grid sm:grid-cols-5 grid-cols-1">
        <div className="col-span-2  w-full  flex justify-center">
          <div className="w-[350px] h-[550px]  rounded-[200px]">
            <img
              className="rounded-[200px] w-full h-full object-cover"
              src="/6b.jpg"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="flex gap-2 items-center">
            <h5 className="">EXPERIENCE WELLNEZ</h5>
            <h5 className="bg-primary px-5 py-1">25 YEARS</h5>
          </div>
          <h3 className="text-[50px] ">DISCOVER A NEW</h3>

          <h5 className="mt-2">
            We think your heair should look and refreshed matter <br /> your
            lifestyle Wellnez.
          </h5>
          <div className="grid grid-cols-2 gap-[10%] mt-[10%]">
            <div className="col-span-1 hover:bg-primary p-3">
              <div className="w-full h-[200px]  border border-dashed border-primary hover:border-white flex relative">
                <div className="absolute -top-[25%] flex items-center w-full justify-center ">
                  <div className="bg-white hover:bg-primary p-2 rounded-full">
                    <div className="w-[80px] h-[80px] bg-primary rounded-full flex justify-center items-center">
                      <PiHairDryer className="text-[40px] text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full items-center px-[8%]">
                  <h5 className="text-black text-[22px]">Body Treatments</h5>
                  <p className="text-black/60 text-sm text-center mt-5">
                    There many variations passages Ipsum availle majority have
                    suffered in some.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 hover:bg-primary p-3">
              <div className="w-full h-[200px]  border border-dashed border-primary hover:border-white flex relative">
                <div className="absolute -top-[25%] flex items-center w-full justify-center ">
                  <div className="bg-white hover:bg-primary p-2 rounded-full">
                    <div className="w-[80px] h-[80px] bg-primary rounded-full flex justify-center items-center">
                      <PiHairDryer className="text-[40px] text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full items-center px-[8%]">
                  <h5 className="text-black text-[22px]">Body Treatments</h5>
                  <p className="text-black/60 text-sm text-center mt-5">
                    There many variations passages Ipsum availle majority have
                    suffered in some.
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
