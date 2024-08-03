import React from "react";
import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="relative w-full h-[40vh]" id="home">
      <img
        className="absolute  object-cover left-0 w-full h-full z-10"
        src="/footer.jpg"
      />
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="max-w-[1440px] mx-auto py-[3%] px-[5%]">
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-1">
              <Link href="/">
                <div>
                  <img className="w-[150px]" src="/glowlogo.png" />
                </div>
              </Link>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-[20px]" />
                  <h6 className="sm:text-sm text-xs text-white/50 font-medium">
                    3702 Frankford Rd, Dallas TX, 75287
                  </h6>
                </div>
                <div className="flex items-center gap-1">
                  <FiPhone className="text-[20px]" />
                  <h6 className="sm:text-sm text-xs text-white/50 font-medium">
                    (469) 670-0124
                  </h6>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineEmail className="text-[20px]" />
                  <h6 className="sm:text-sm text-xs text-white/50 font-medium">
                    inguiry@glowwithkidness.com
                  </h6>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2  text-white">
                <h6 className="text-[20px]">Open Hours</h6>
                <h6 className="font-medium">Sunday to Friday 08:00 - 20:00</h6>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-[22px] text-white ">IMPORTANT LINKS</h4>
              <div className="w-[50px] bg-primary h-[3px] my-2" />
              <div className="mt-8 flex gap-4 flex-col">
                <div className="flex items-center gap-1 ">
                  <PiCaretRightBold className="text-primary " />
                  <h6 className="text-sm uppercase text-white/50">Services</h6>
                </div>
                <div className="flex items-center gap-1 ">
                  <PiCaretRightBold className="text-primary " />
                  <h6 className="text-sm uppercase text-white/50">About us</h6>
                </div>
                <div className="flex items-center gap-1 ">
                  <PiCaretRightBold className="text-primary " />
                  <h6 className="text-sm uppercase text-white/50">
                    price plan
                  </h6>
                </div>
                <div className="flex items-center gap-1 ">
                  <PiCaretRightBold className="text-primary " />
                  <h6 className="text-sm uppercase text-white/50">contact</h6>
                </div>
                <div className="flex items-center gap-1 ">
                  <PiCaretRightBold className="text-primary " />
                  <h6 className="text-sm uppercase text-white/50">our blog</h6>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-[22px] text-white ">CONNECT WITH US</h4>
              <div className="w-[50px] bg-primary h-[3px] my-2" />
              <div className="mt-8 flex gap-4 flex-col">
                <h5 className="text-white/50">
                  Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam
                  efficitur.
                </h5>
              </div>
              <div className="w-full h-[50px] bg-[#273036] mt-4">
                <input
                  type="text"
                  className="w-full h-full bg-transparent outline-none pl-6 placeholder:text-sm "
                  placeholder="Your email "
                />
              </div>
              <button className="bg-primary px-8 py-3 mt-4 font-medium text-sm ">
                SUBSCRIBE
              </button>
            </div>
            <div className="col-span-1">
              <h4 className="text-[22px] text-white ">INSTAGRAM</h4>
              <div className="w-[50px] bg-primary h-[3px] my-2" />
              <div className="grid grid-cols-4 gap-4 flex-col h-[100px]">
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>

                <div className="col-span-1 w-full h-full">
                  <img src="/gal.jpg " className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
