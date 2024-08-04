import React from "react";
import NavFootLayout from "../../layout/NavFootLayout";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <NavFootLayout>
        <div className="w-full pt-[14vh]  sm:pt-[19vh]">
          <img
            src="/about.jpg"
            className="w-full sm:h-[400px] h-[300px] object-right object-cover"
          />
          <div className="max-w-[1440px] mx-auto">
            <div className="grid sm:grid-cols-3 grid-cols-1   px-[5%] my-[6%] ">
              <div className="sm:col-span-2">
                <h4 className="text-[30px] font-semibold mb-5">Contact Us</h4>
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="col-span-1">
                    <div className="flex flex-col sm:gap-6 gap-4 sm:mt-5">
                      <div className="flex items-center gap-2">
                        <FiPhone className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          (469) 670-0124
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineLocationOn className="text-[26px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          3702 Frankford Rd, Dallas TX, 75287
                        </h6>
                      </div>

                      <div className="flex items-center gap-2">
                        <MdOutlineEmail className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          inguiry@glowwithkidness.com
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex flex-col gap-6 mt-5">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          Tue - Sun: 8am - 8pm
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-[24px]" />
                        <h6 className="sm:text-xl text-xs  font-medium">
                          Mon: CLOSED
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 sm:mt-0 mt-5">
                <h4 className="text-[30px] font-semibold mb-5">
                  Send Us A Message
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="w-full h-[50px] bg-[#F7F7F7] rounded-[10px]">
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-5"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="w-full h-[50px] bg-[#F7F7F7] rounded-[10px]">
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-5"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="w-full h-[50px] bg-[#F7F7F7] rounded-[10px]">
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-5"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-full h-[200px] bg-[#F7F7F7] rounded-[10px]">
                    <textarea
                      type="text"
                      className="w-full h-full bg-transparent outline-none p-5"
                      placeholder="Your Message"
                    />
                  </div>
                  <button className="w-full bg-primary h-[50px] rounded-[50px] font-medium text-lg">
                    Submit{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavFootLayout>
    </div>
  );
}
