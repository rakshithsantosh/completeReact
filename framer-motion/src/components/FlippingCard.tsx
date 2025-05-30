import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(true);
  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000"
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        <div className="absolute inset-0  bg-white flex items-center justify-center ">
          Front Side
        </div>
        <div className="absolute inset-0  bg-blue-500 flex items-center justify-center  rotate-180">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
