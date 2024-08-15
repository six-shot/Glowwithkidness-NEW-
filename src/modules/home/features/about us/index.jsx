import React from "react";
import { PiHairDryer } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="px-[5%] py-[4%] ">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 md:gap-5 lg:gap-0 grid-cols-1">
        <div className="lg:col-span-2 col-span-1 w-full  flex lg:justify-start justify-center ">
          <div className="sm:w-[350px] h-[550px]  rounded-[200px] sm:mt-0 mb-[5%]">
            <img
              className="rounded-[200px] w-full h-full object-cover"
              src="/6b.jpg"
            />
          </div>
        </div>
        <div className="lg:col-span-3 col-span-1">
          <div className="flex sm:gap-2 sm:flex-row flex-col sm:items-center items-start">
            <h5 className="">EXPERIENCE GLOWWITHKINDNESS</h5>
            {/* <h5 className="bg-primary px-5 py-1 sm:my-0 my-2">25 YEARS</h5> */}
          </div>
          <h3 className="lg:text-[50px] text-[30px]">DISCOVER A NEW</h3>

          <h5 className="mt-2 lg:w-[600px] ">
            We are thrilled that you have chosen us for your beauty services,
            and we hope you become one of our valued regular clients over your
            next several appointments.
          </h5>
          <p className="mt-4 lg:w-[600px]">
            We offer hair styling, makeup, and more. Our team of trained,
            qualified, and licensed professionals pride ourselves on our ability
            to provide a variety of the highest quality services possible that
            are designed to create a look that&apos;s perfect for you, make you
            look and feel your best at competitive prices while maintaining the
            highest standard of hygiene and cleanliness within our facility.
          </p>
          <p className="mt-4 lg:w-[600px]">
            Kindly read our{" "}
            <Link to="/terms-and-conditions">
              {" "}
              <span className="text-[#f198bf] font-bold underline">
                terms and conditions
              </span>
            </Link>{" "}
            to better understand how we operate. We hope you&apos;ll visit us
            soon and experience the difference our salon can make.
          </p>
          <p className="mt-4 lg:w-[600px]">
            Thank you for choosing us, and we look forward to serving you!
          </p>
          <Link to="/booking">
            <button className="px-8 py-3 bg-primary mt-5 font-medium rounded-[50px]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
