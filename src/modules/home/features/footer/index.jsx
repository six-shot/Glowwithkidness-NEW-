import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-20 bg-black py-[4%] px-[5%]">
      <div className="col-span-1">
        <div>
          <div>
            <h4 className="font-semibold text-white text-[24px]">About Us</h4>
            <p className="text-white/50 mt-4 mb-2">
              We offer hair styling, makeup, and more. Our team of trained,
              qualified.
            </p>
            <div className="flex flex-row gap-5 items-center text-[#F1CEDD] text-[24px] my-[4%]">
              <FaFacebookSquare />
              <FaTwitter />
              <FaInstagramSquare />
            </div>
            <h5 className="text-white/50 text-sm">
              Copyright © 2024 Glow with Kindness
            </h5>
            <h5 className="text-white/50 text-sm my-4">
              We Bring the Glow in you
            </h5>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <h4 className="font-semibold text-white text-[24px]">Contact Info</h4>
        <div className="flex flex-col mt-4 gap-2">
          <h5 className="text-white/50 text-sm">+ (469) 670-0124</h5>
          <h5 className="text-white/50 text-sm">
            inquiry@glowwithkindness.com
          </h5>
        </div>
        <h4 className="font-semibold text-white text-[24px] mt-5">
          Important Links
        </h4>
        <div className="flex  mt-4 gap-2">
          <h6 className="text-white/50 text-sm underline">Home</h6>
          <h6 className="text-white/50 text-sm underline">About us</h6>
          <h6 className="text-white/50 text-sm underline">Hair Guide</h6>
          <h6 className="text-white/50 text-sm underline">For You</h6>
          <h6 className="text-white/50 text-sm underline">Contact us</h6>
        </div>
      </div>
      <div className="col-span-1">
        <h4 className="font-semibold text-white text-[24px]">Newsletter Signup</h4>
        <div className="border-b border-white/50 w-full h-[50px] mt-4">
            <input type="text" placeholder="Enter your email" className="w-full h-full text-white/50 px-3 bg-transparent outline-none"/>
        </div>
       <button className="px-12 mt-5 py-3 border border-white/50 rounded-[50px] text-white/50">
        Send me
       </button>
       <h6 className="text-white/50 text-xs mt-4 ">*Please note - we do not spam your email</h6>
      </div>
    </div>
  );
}
