import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  { src: "1a.jpg", text: "First Image" },
  { src: "2.jpg", text: "Second Image" },
  { src: "3.jpg", text: "Third Image" },
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

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 2) {
            return 1;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 2) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 1) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden mt-[15vh] ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${(imgIndex - 1) * (100 / 3)}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      {/* 
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((img, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center w-1/3 h-[650px] shrink-0"
          >
            <motion.div
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="aspect-video w-full h-[650px]  object-cover"
            />
            {/* <motion.div
              transition={SPRING_OPTIONS}
              className={`w-full -mt-[15%] text-center h-[100px] bg-[#000000] flex items-center justify-center text-white ${
                imgIndex === idx ? "text-[red] text-bold bg-black" : ""
              }`}
            >
              {img.text}
            </motion.div> */}
          </div>
        );
      })}
    </>
  );
};

// const Dots = ({ imgIndex, setImgIndex }) => {
//   return (
//     <div className="mt-4 flex w-full justify-center gap-2">
//       {imgs.slice(1, imgs.length - 1).map((_, idx) => {
//         return (
//           <button
//             key={idx + 1}
//             onClick={() => setImgIndex(idx + 1)}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               idx + 1 === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };


