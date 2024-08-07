// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { PiHairDryer } from "react-icons/pi";
// export default function Testimonial() {
//   return (
//     <div className="relative w-full h-[100vh] flex items-center" id="home">
//       <div className="absolute top-0 left-0 z-20 w-full">
//         <div className="max-w-[1440px] mx-auto pt-[5%] px-[5%]">
//           <div className="flex items-center justify-center flex-col sm:mb-[5%] mb-[14%]">
//             <h5 className="tracking-[3px] font-medium">OUR CLIENTS</h5>

//             <h4 className="sm:text-[40px]  text-[30px] text-center font-medium">GLowithkindness Customers</h4>
//           </div>
//           <div className="relative bg-primary w-full flex justify-center items-center flex-col h-[350px]  px-[5%]">
//             <div className="absolute -top-[15%] flex items-center w-full justify-center ">
//               <div className="bg-white hover:bg-primary p-2 rounded-full">
//                 <div className="w-[80px] h-[80px] bg-primary rounded-full flex justify-center items-center">
//                   <PiHairDryer className="text-[40px] text-white" />
//                 </div>
//               </div>
//             </div>
//             <h4 className="text-center italic sm:text-[24px] text-[20px] mt-[4%]">
//               “For a couple of times, I've been going to Kindness for my braids.
//               I will continue to visit her no matter where I travel in the city.
//               She does a fantastic job!”
//             </h4>
//             <div className="mt-[7%] text-center">
//               {" "}
//               <h5 className="text-[20px]">Rosemary Ajayi</h5>
//               <h6 className="uppercase text-xs mt-[4%]">Sweetheart</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-primary h-screen  opacity-40 z-[10] "></div>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const testimonials = [
  {
    text: "For a couple of times, I've been going to Kindness for my braids. I will continue to visit her no matter where I travel in the city. She does a fantastic job!",
    name: "Gloria Ernest",
    img: "/user1.jpg",
  },
  {
    text: "For many years, I have struggled with hair stylists who lack enthusiasm for their craft. This lady is fantastic! I have become part of her craft!",
    name: "Priscy Albert",
    img: "/user2.jpg",
  },
  {
    text: "I had the nicest braids ever because of Kindness! She did a fantastic job and was also swift. The time specified for appointments on her website was all I had to do. I'm returning!",
    name: "Emily Smith",
    img: "/user3.jpg",
  },
  {
    text: "Kindness was amazing! My expectations were surpassed by how professional she was. My hair was brilliant and incredibly healthy when I left the salon.",
    name: "Emily Smith",
    img: "/user4.jpg",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const TestimonialSlider = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative flex items-center justify-center bg-primary h-[350px]  ">
      <div className=" p-4  w-full ">
        <div className="absolute top-[-15%] z-[100] flex items-center justify-center w-full">
          <div className=" w-[100px] h-[100px] rounded-full">
           <img src={testimonials[testimonialIndex].img} className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h4 className="italic sm:text-[24px] text-[20px] ">
            “{testimonials[testimonialIndex].text}”
          </h4>
          <div className="mt-[5%]">
            <h5 className="text-[20px]">
              {testimonials[testimonialIndex].name}
            </h5>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="relative w-full h-[100vh] bg-primary/40  flex items-center">
      <div className="absolute top-0 left-0 z-20 w-full">
        <div className="max-w-[1440px] mx-auto pt-[5%] px-[5%]">
          <div className="flex items-center justify-center flex-col sm:mb-[5%] mb-[14%]">
            <h5 className="tracking-[3px] font-medium">OUR CLIENTS</h5>
            <h4 className="sm:text-[40px] text-[30px] text-center font-medium">
           Some reviews from our clients
            </h4>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    
    </div>
  );
}
