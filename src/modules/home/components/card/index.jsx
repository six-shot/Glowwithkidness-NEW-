import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";


const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[450px] min-w-[400px] bg-slate-400  flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Boook Now</span>
              {/* <Arrow className="h-4 w-4" /> */}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={image} alt={image} className="w-full h-full" style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
