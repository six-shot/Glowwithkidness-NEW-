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
          <h4 className="sm:text-[40px] text-[30px] sm:leding-[40px] leading-[30px]">
            Protect your braids
          </h4>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 col-span-1 items-center  mt-[5%]">
        <div className="col-span-1">
          <div className="flex gap-5 flex-col">
            <div className="flex gap-7 items-center ">
              <div className="flex gap-4">
                <div className="flex flex-col justify-end items-end">
                  <h4 className="text-[24px]">Avoid Long-Term Braids</h4>
                  <p className="text-sm mt-3 text-right">
                    Yes, a braided hairstyle can be worn for a long time.
                    However, you shouldn’t leave them on for too long.
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
                  <h4 className="text-[24px]">Regular Hair Care</h4>
                  <p className="text-sm mt-3 text-right">
                    Use oil sheen spray and mousse every Three to Five days.
                    This gives your hair a pleasant smell and prevents your
                    roots from drying out.
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
                  <h4 className="text-[24px]">Prevent Hair Damage</h4>
                  <p className="text-sm mt-3 text-right">
                    Long-term braids increase breakage, knots, and tangles. Your
                    hair will be more prone to breakage, knots, and tangles the
                    longer you leave your braids in.
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
                  <h4 className="text-[24px]">Give Your Hair a Break</h4>
                  <p className="text-sm mt-3 ">
                    Avoid repeated braiding to allow hair to rest. Although
                    braids are protective styles, they should not be made
                    repeatedly because your hair also needs a break.
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
                  <h4 className="text-[24px]">Retouch and Maintain</h4>
                  <p className="text-sm mt-3 ">
                    Retouch edges after Three weeks for longer-lasting braids.
                    You might need to retouch your edges after three weeks if
                    you intend to wear your braids for eight weeks.
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
                  <h4 className="text-[24px]">Bedtime Protection</h4>
                  <p className="text-sm mt-3 ">
                    Cover braids with a silk or satin bonnet at night. When you
                    go to bed, cover your braids with a silk or satin hair
                    bonnet to prevent friction with your bedding.
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
