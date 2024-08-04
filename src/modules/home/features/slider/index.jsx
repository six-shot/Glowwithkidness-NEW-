import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  { src: "1a.jpg", text: "First Image" },
  { src: "4.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "3.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "4.jpg", text: "Third Image" },
  { src: "4.jpg", text: "Fourth Image" },
  { src: "5b.jpg", text: "Fifth Image" },
  { src: "6b.jpg", text: "Sixth Image" },
  { src: "1a.jpg", text: "Seventh Image" },
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

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

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
        isMobile ? "mobile" : "desktop"
      }`}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${(imgIndex - 1) * (isMobile ? 100 : 100 / 3)}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((img, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center w-full sm:w-1/3 h-[650px] shrink-0"
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

