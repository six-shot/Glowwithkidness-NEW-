import React from "react";
import Hero from "./features/hero";

import { FaCalendarDays } from "react-icons/fa6";
import About from "./features/about us";
import { Gallery } from "./features/gallery";
import Services from "./features/services";
import Pricing from "./features/pricing";
import Banner from "./features/banner";
import Testimonial from "./features/testimonial";
import Contact from "./features/contact";
import Footer from "./features/footer";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="max-w-[1440px] mx-auto">
        <Banner />
        <About />
      </div>
      <Gallery />
      <div className="max-w-[1440px] mx-auto">
        {" "}
        <Services />
      </div>
      <Pricing />
      <Testimonial/>
      <Contact/>
      <Footer/>

      {/* <div className="fixed bottom-[8%] py-3 px-5 rounded-[50px] right-[2%] bg-[#F1CEDD] font-semibold flex gap-2 items-center">
        <FaCalendarDays />
        <h5> Book an Appointment</h5>
      </div> */}
    </div>
  );
}
