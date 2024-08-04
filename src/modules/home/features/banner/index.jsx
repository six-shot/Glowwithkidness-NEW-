import React from "react";
import Marquee from "react-fast-marquee";

export default function Banner() {
  const styles = [
    {
      hair_type: "BOB BOX BRAIDS",
      price: "$200",
      styles: ["Small Box Braid", "Medium Box Braid", "Large Bob Box Braid"],
    },
    {
      hair_type: "BOHO BOB KNOTLESS BRAIDS",
      price: "$200",
      styles: [
        "Small Boho Bob Knotless Braids",
        "Medium Boho Bob Knotless Braids",
      ],
    },
    {
      hair_type: "BOHO ISLAND TWIST",
      price: "$200",
      styles: [
        'Small Boho Island Twist (Midback 24")',
        'Medium Boho Island Twist (Midback 24")',
        'Large Boho Island Twist (Midback 24")',
        'Jumbo Boho Island Twist (Midback 24")',
      ],
    },
    {
      hair_type: "BOHO KNOTLESS BRAIDS",
      price: "$200",
      styles: [
        'Small Boho Knotless Braids (Midback 24")',
        'SMedium Boho Knotless Braids (Midback 24")',
        'Medium Boho Knotless Braids (Midback 24")',
        'Large Boho Knotless Braids (Midback 24")',
      ],
    },
    {
      hair_type: "BOX BRAIDS",
      price: "$200",
      styles: [
        'XSmall Box Braids (Midback 24")',
        'Small Box Braids (Midback 24")',
        'Medium Box Braids (Midback 24")',
        'Large Box Braids (Midback 24")',
      ],
    },
    {
      hair_type: "CROCHET",
      price: "$200",
      styles: [
        "Individual Locks Crochet",
        "Loose Crochet",
        "Regular Locks Crochet",
       
      ],
    },
  ];

  return (
    <div>
      <div className="px-[5%] sm:py-[3%] py-[5%]">
        <div className="">
          <Marquee className="mq" direction="left" speed={60}>
            {styles.map((style, index) => (
              <div
                key={index}
                className="sm:w-[400px] w-[350px] bg-primary mx-3 h-[300px] flex justify-between flex-col p-[4%]"
              >
                <div className="col-span-1 h-full  px-[5%] py-[8 %]  ">
                  <div className="flex flex-col h-full">
                    <h4 className="text-[22px] font-medium leading-[28px]">
                      {style.hair_type}
                    </h4>
                  </div>
                </div>
                {style.styles &&
                  style.styles.map((styleItem, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-end justify-end"
                    >
                      <p className="text-base">{styleItem}</p>
                    </div>
                  ))}
              </div>
            ))}
          </Marquee>
        </div>
      
      </div>
    </div>
  );
}
