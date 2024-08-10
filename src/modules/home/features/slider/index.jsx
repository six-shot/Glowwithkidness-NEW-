import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "03.jpg", text: "Third Image" },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Slider = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const dragX = useMotionValue(0);

  const isMobile = window.innerWidth <= 640;
  const isTablet = window.innerWidth > 640 && window.innerWidth <= 768;

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => (prev === imgs.length - 2 ? 1 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 2) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 1) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`relative overflow-hidden sm:mt-[15vh] mt-[14vh] slider-container ${
        isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
      }`}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${
            (imgIndex - 1) * (isMobile ? 100 : isTablet ? 100 / 2 : 100 / 3)
          }%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images isMobile={isMobile} isTablet={isTablet} />
      </motion.div>
    </div>
  );
};

const Images = ({ isMobile, isTablet }) => {
  return (
    <>
      {imgs.map((img, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center ${
            isMobile ? "w-full" : isTablet ? "w-1/2" : "w-1/3"
          } h-[650px] shrink-0`}
        >
          <motion.div
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-video w-full h-[650px] object-cover"
          />
        </div>
      ))}
    </>
  );
};
