import React from "react";

export default function Banner() {
  return (
    <div className=" px-[5%] py-[4%] mb-[2%] flex justify-center items-center">
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[200px]  h-[180px] ">
        <div className="col-span-1 h-full">
          <div className="flex justify-between flex-col h-full ">
            <h4 className="text-[22px] font-semibold leading-[28px]">
              SKINPURE NEW <br />
              BEAUTY
            </h4>
            <div>
              <h5 className="line-through">$75.00</h5>
              <h4 className="text-[22px] font-semibold leading-[30px]">
                $18.00
              </h4>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="flex justify-between flex-col h-full ">
            <h4 className="text-[22px] font-semibold leading-[28px]">
              SKINPURE NEW <br />
              BEAUTY
            </h4>
            <div>
              <h5 className="line-through">$75.00</h5>
              <h4 className="text-[22px] font-semibold leading-[30px]">
                $18.00
              </h4>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="flex justify-between flex-col h-full ">
            <h4 className="text-[22px] font-semibold leading-[28px]">
              SKINPURE NEW <br />
              BEAUTY
            </h4>
            <div>
              <h5 className="line-through">$75.00</h5>
              <h4 className="text-[22px] font-semibold leading-[30px]">
                $18.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
