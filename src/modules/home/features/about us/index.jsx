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
            <h5 className="">EXPERIENCE GLOWWITHKINDNESS</h5>
            <h5 className="bg-primary px-5 py-1">25 YEARS</h5>
          </div>
          <h3 className="text-[50px] ">DISCOVER A NEW</h3>

          <h5 className="mt-2 sm:w-[600px]">
            We are thrilled that you have chosen us for your beauty services,
            and we hope you become one of our valued regular clients over your
            next several appointments.
          </h5>
          <p className="mt-4 sm:w-[600px]">
            We offer hair styling, makeup, and more. Our team of trained,
            qualified, and licensed professionals pride ourselves on our ability
            to provide a variety of the highest quality services possible that
            are designed to create a look that&apos;s perfect for you, make you
            look and feel your best at competitive prices while maintaining the
            highest standard of hygiene and cleanliness within our facility.
          </p>
          <p className="mt-4 sm:w-[600px]">
            Kindly read our <span className="text-primary">terms and conditions</span> to better
            understand how we operate. We hope you&apos;ll visit us soon and
            experience the difference our salon can make.
          </p>
        
        </div>
      </div>
    </div>
  );
}
