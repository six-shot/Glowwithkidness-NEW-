

import React from "react";
import Marquee from "react-fast-marquee";

export default function Banner() {
    const styles = [
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
      {
        hair_type: "BOB BOX BRAIDS",
        price: "$200",
      },
    ];
  return (
    <div>
      <div className="px-[5%] sm:py-[3%]  py-[5%]">
        <div className="">
          <Marquee className="mq" direction="right" speed={60}>
            {styles.map((style) => (
              <div className="sm:w-[400px] w-[300px]  sm:h-[300px] h-[250px]  flex flex-col justify-between  p-[4%]">
                <div className="col-span-1 h-full bg-primary px-[5%] py-[8%] ">
                  <div className="flex justify-between flex-col h-full ">
                    <h4 className="text-[22px] font-medium leading-[28px]">
                      {style.hair_type}
                    </h4>

                    <div className="flex flex-col items-end justify-end">
                      <p className="text-base">Small Box Braid</p>
                      <p>Medium Box Braid</p>
                      <p>Large Bob Box Braid</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
