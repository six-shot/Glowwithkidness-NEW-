import React, { useEffect, useState } from "react";
import Hero from "./features/hero";
import { IoMdArrowUp } from "react-icons/io";
import About from "./features/about us";
import Gallery from "./features/gallery"
import Services from "./features/services";
import Pricing from "./features/pricing";
import Banner from "./features/banner";
import Testimonial from "./features/testimonial";
import Contact from "./features/contact";
import Footer from "./features/footer";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Show the button when the user scrolls down 200px
    if (scrollY > 200) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Hero />
      <div className="max-w-[1440px] mx-auto">
        <Banner />
        <About />
      </div>
      {/* <Gallery /> */}
      <div className="max-w-[1440px] mx-auto">
        <Services />
      </div>
      <Testimonial />
      {/* 
      <Contact />
      <Footer /> */}
      {showTopButton && (
        <div className="fixed bottom-[10%] right-[4%] bg-primary w-[45px] h-[45px] flex justify-center items-center rounded-full z-[50] text-black">
          <button className="text-[20px]" onClick={scrollToTop}>
            <IoMdArrowUp />
          </button>
        </div>
      )}
    </div>
  );
}
