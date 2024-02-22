import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

function Feature({ icon, title, description }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img src={require(`../img/${icon}.png`)} alt="" className="w-[3rem]" />
        </motion.div>

        <span className="mt-5 text-xl">{title}</span>

        <span className="text-[#707070] mt-4">{description}</span>

        <button className="bg-[#1B0ACB] text-white font-bold py-2 px-4 rounded-full mt-6 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          Leer Más 
        </button>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
