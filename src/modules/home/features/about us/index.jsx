import React from "react";

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
            We think your heair should look and refshed matter <br/> your lifestyle
            Wellnez.
          </h5>
          <div className="grid grid-cols-2">
            <div className="col-span-2">

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
