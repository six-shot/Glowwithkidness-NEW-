import React from "react";

export default function Banner() {
  return (
    <div className=" px-[5%] mt-[4%] mb-[2%]">
      <h5 className="text-black tracking-[6px] text-lg">
        MOST POPULAR SERVICES
      </h5>
      <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-10  ">
        <div className="col-span-1">
          <div className="w-full sm:mt-[15%] mt-[4%]">
            <h6 className="text-sm">01</h6>
            <div className="border-b border-[#00000073] mt-5"></div>
            <h6 className="sm:mt-5 mt-2 sm:text-[45px] text-[30px] font-medium hover:italic cursor-pointer">
              Clipping
            </h6>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full sm:mt-[15%] mt-[4%]">
            <h6 className="text-sm">02</h6>
            <div className="border-b border-[#00000073] mt-5"></div>
            <h6 className="sm:mt-5 mt-2 sm:text-[45px] text-[30px] font-medium hover:italic cursor-pointer">
              Stylization
            </h6>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full sm:mt-[15%] mt-[4%]">
            <h6 className="text-sm">03</h6>
            <div className="border-b border-[#00000073] mt-5"></div>
            <h6 className="sm:mt-5 mt-2 sm:text-[45px] text-[30px] font-medium hover:italic cursor-pointer">
              Colorization
            </h6>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full sm:mt-[15%] mt-[4%]">
            <h6 className="text-sm">04</h6>
            <div className="border-b border-[#00000073] mt-5"></div>
            <h6 className="sm:mt-5 mt-2 sm:text-[45px] text-[30px] font-medium hover:italic cursor-pointer">
              Care
            </h6>
          </div>
        </div>
      </div>
      <button className="mt-4 sm:mt-8 bg-black text-sm rounded-[50px] text-white sm:px-8 px-4 sm:py-3 py-2.5">
        See Pricelist
      </button>
    </div>
  );
}
